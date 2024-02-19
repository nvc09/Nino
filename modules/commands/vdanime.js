module.exports.config = {
  name: "vdanime",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "vthien",
  description: "",
  commandCategory: "Noprefix",
  usages: "Anime",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.handleEvent = async ({
  args,
  event,
  api,
  Users
}) => {
  const fs = global.nodemodule["fs-extra"];
  const moment = require('moment-timezone');
  const timeStart = Date.now();
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:ss");
  var thu =
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  var {
    threadID,
    messageID,
    body,
    senderID
  } = event;
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["vdanime"] !== "undefined" && thread["vdanime"] == false) return;
const axios = require('axios')
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  let name = await Users.getNameUser(event.senderID);
  if (senderID == api.getCurrentUserID()) return;
const namebot = global.config.BOTNAME;
  const PREFIX = config.PREFIX;
  const { commands } = global.client; 
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
const res = await axios.get(`https://sumiproject.io.vn/text/thinh`);
var thinh = res.data.data;
  //trả lời
  var msg = {
    body: `
[👤] → Hello: ${name}\n[💫] → Video anime của bạn đây\n[📆] → Hôm nay là: ${thu}\n[⏰] → Bây giờ là: ${timeNow}\n[⌛] → ${global.config.BOTNAME} đã onl được: ${hours} giờ ${minutes} phút ${seconds} giây\n[🌷] → Thơ: ${thinh}\n[💓] → Update by: ${global.config.ADMINNAME}\n`,
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]('https://sumiproject.io.vn/video/videoanime')).data.url,
      method: "GET",
      responseType: "stream"
    })).data
  }
  // Gọi bot
  var arr = ["Anime","vdanime","nime"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "vdanime thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "hi success!",
  }
}

module.exports.run = async function({
  api,
  event,
  Threads,
  getText
}) {
  const {
    threadID,
    messageID
  } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["vdanime"] == "undefined" || data["vdanime"] == true) data["vdanime"] = false;
  else data["vdanime"] = true;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["vdanime"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
        }