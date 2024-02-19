const fs = require('fs-extra');
const path = require('path');
const messageCountFolderPath = path.join(__dirname, '../../modules/commands/cache/data/messageCounts');

module.exports.config = {
  name: "topbox",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Vtuan",
  description: "Hiển thị thứ hạng tin nhắn của nhóm",
  commandCategory: "Nhóm",
  usages: "topbox",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
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
  const msg = `Nhóm của bạn có: ${currentGroupMessages} tin nhắn - xếp thứ: ${currentGroupRank} trên ${totalGroups} nhóm.`;
  api.sendMessage(msg, currentThreadID);
};