const fs = require("fs");
const request = require("request");
module.exports.config = {
  name: "box",
  version: "2.0.0", 
  hasPermssion: 1,
  credits: "Vtuan",
  description: "Xem thông tin box của bạn",
  commandCategory: "Quản Trị Viên", 
  usages: "boxinfo", 
  cooldowns: 0,
  dependencies: [] 
};


module.exports.run = async ({ api, event ,Threads, args }) => {
  var fs = global.nodemodule["fs-extra"];
  let threadInfo = await api.getThreadInfo(event.threadID);
  var memLength = threadInfo.participantIDs.length;
  let threadMem = threadInfo.participantIDs.length;
  var nameMen = [];
  var gendernam = [];
  var gendernu = [];
  var nope = [];
  for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if(gioitinhone == "MALE"){gendernam.push(z+gioitinhone)}
      else if(gioitinhone == "FEMALE"){gendernu.push(gioitinhone)}
      else{nope.push(nName)}
    };
  var nam = gendernam.length;
  var nu = gendernu.length;
  let qtv = threadInfo.adminIDs.length;
  let sl = threadInfo.messageCount;
  let u = threadInfo.nicknames;
  let icon = threadInfo.emoji;
  let color = threadInfo.color;
  let threadName = threadInfo.threadName;
  let id = threadInfo.threadID;
  let pathToRentData = __dirname + '/../commands/cache/data/thuebot.json';
  let rentData = fs.existsSync(pathToRentData) ? require(pathToRentData) : [];
  let threadRentInfo = rentData.find(rent => rent.t_id === event.threadID);
  let rentStatus = "";
  if (threadRentInfo) {
    let endDate = new Date(threadRentInfo.time_end.split('/').reverse().join('/'));
    let now = new Date();
    let timeDiff = endDate.getTime() - now.getTime();
    if (timeDiff >= 0) {
      let daysLeft = Math.floor(timeDiff / (1000 * 3600 * 24));
      let daysText = daysLeft === 1 ? 'ngày' : 'ngày';
      rentStatus = `Bot vẫn còn hạn thuê đến: ${threadRentInfo.time_end} (còn lại ${daysLeft} ${daysText})`;
    } else {
      rentStatus = `Bot đã hết hạn thuê từ: ${threadRentInfo.time_end}`;
    }
  } else {
    rentStatus = `Nhóm này chưa thuê bot!`;
  }
  const path = require('path');
  const messageCountFolderPath = path.join(__dirname, '../../modules/commands/cache/data/messageCounts');
  const currentThreadID = event.threadID;
  const directoryContent = await fs.readdir(messageCountFolderPath);
  const messageCountFiles = directoryContent.filter((file) => file.endsWith('.json'));
  let groupMessageCounts = [];
  for (const file of messageCountFiles) {
    const filePath = path.join(messageCountFolderPath, file);
    const data = await fs.readJson(filePath);
    const totalMessages = data.reduce((acc, cur) => acc + cur.count, 0);
    groupMessageCounts.push({ threadID: file.replace('.json', ''), totalMessages });
  }
  groupMessageCounts.sort((a, b) => b.totalMessages - a.totalMessages);
  const currentGroupRank = groupMessageCounts.findIndex(group => group.threadID === currentThreadID) + 1;
  const currentGroupMessages = groupMessageCounts.find(group => group.threadID === currentThreadID).totalMessages;
  const totalGroups = groupMessageCounts.length;
  const msgssss = `Nhóm đứng top: ${currentGroupRank} server với ${currentGroupMessages} tin nhắn`;
        api.sendMessage(`=== 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 ===\n────────────\n→ Tên nhóm: ${threadName || "không có"}\n→ ID: ${id}\n→ Biểu tượng: ${icon || "👍"}\n→ Mã giao diện: ${color}\n→ Dấu lệnh hệ thống: ${global.config.PREFIX}\n→ Tổng: ${threadMem} thành viên\n→ Nam: ${nam} thành viên\n→ Nữ: ${nu} thành viên\n→ Quản trị viên: ${qtv}\n────────────\n→ Tình trạng thuê bot: ${rentStatus}\n→ ${msgssss}\n────────────\nThả icon "👍" vào tin nhắn bot nếu muốn xem xếp hạng các nhóm!`,event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID, currentThreadID);
}

module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const fs = require('fs-extra');
  const path = require('path');
  const messageCountFolderPath = path.join(__dirname, '../../modules/commands/cache/data/messageCounts');

  // Kiểm tra nếu bot không phải là tác giả của sự kiện hoặc emoji không phải là "👍"
  if (event.userID != handleReaction.author || event.reaction != "👍") return;

  api.unsendMessage(handleReaction.messageID);

  const messageCountFiles = await fs.readdir(messageCountFolderPath);
  const threadStats = [];

  for (const fileName of messageCountFiles) {
    if (fileName.endsWith('.json')) {
      const filePath = path.join(messageCountFolderPath, fileName);
      const threadID = fileName.replace('.json', '');
      const messageCounts = await fs.readJson(filePath);
      const totalMessages = messageCounts.reduce((total, message) => total + message.count, 0);

      // Kiểm tra xem bot có trong nhóm hay không
      let threadInfo;
      try {
        threadInfo = await api.getThreadInfo(threadID);
      } catch (error) {
        threadInfo = { threadName: "Nhóm không tồn tại hoặc bot không ở trong nhóm này" };
      }

      threadStats.push({ name: threadInfo.threadName, id: threadID, totalMessages });
    }
  }

  threadStats.sort((a, b) => b.totalMessages - a.totalMessages);
  let rankMessage = '=====[ Top Box ]======\n\n';

  threadStats.forEach((thread, index) => {
    const position = index + 1;
    rankMessage += `『 ${thread.name} 』: đứng top ${position} với tổng ${thread.totalMessages} tin nhắn\n`;
    rankMessage += '——————————————————\n';
  });

  rankMessage += 'Tương Tác Nhiều Lên Nếu không muốn bị tụt dốc=))\n';

  // Gửi thông điệp nhưng không đề cập tên nhóm nếu bot không trong nhóm đó
  return api.sendMessage(rankMessage, event.threadID);
}
