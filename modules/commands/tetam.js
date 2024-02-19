module.exports.config = {
  name: "tetam",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hoài Bảo",
  description: "Đếm ngược tới Tết Âm lịch",
  commandCategory: "Công cụ",
  cooldowns: 5
}

module.exports.run = function ({ event, api }) {
  moment = require("moment-timezone");
  fullTime = () => moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY");
    const t = Date.parse("February 10, 2024 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`━━━━━━━━━━━━━━━━━━━\n「 🎆🎇 𝖢ù𝗇𝗀 Đế𝗆 𝖭𝗀ượ𝖼 𝖭𝗀à𝗒 𝖢ò𝗇 𝖫ạ𝗂 Đế𝗇 𝖳ế𝗍 Â𝗆 𝖫ị𝖼𝗁 𝖭à𝗈 🎇🎆 」\n━━━━━━━━━━━━━━━━━━━\n𝖳𝗂𝗆𝖾: ${fullTime()}\n━━━━━━━━━━━━━━━━━━━\n〔 ${days} 𝖭𝗀à𝗒 ${hours} 𝖦𝗂ờ ${minutes} 𝖯𝗁ú𝗍 ${seconds} 𝖦𝗂â𝗒 〕 `, event.threadID, event.messageID);
}