module.exports.config = {
  name: 'autosend',
  version: '2.0.4',
  hasPermssion: 2,
  credits: '',
  description: 'Tự động gửi tin nhắn theo giờ đã cài!',
  commandCategory: 'Hệ thống',
  usages: '[]',
  cooldowns: 3
};
module.exports.onLoad = o => {
const axios = require('axios');
const fs = require('fs-extra');
if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
global.autosendmessage_setinterval = setInterval(async function() {
  const m = require("moment-timezone").tz("Asia/Ho_Chi_Minh");
  const trhieu = m.format("HH:mm:ss");
  const hour = m.format("HH");
  if ((trhieu === `${hour}:00:00` || trhieu === `${hour}:15:00`|| trhieu === `${hour}:30:00` || trhieu === `${hour}:47:00`) && (hour >= "00" && hour <= "24")) {
    const time = process.uptime();
    const trhieu = (await axios.get(`https://5b1810e4-3802-48f5-8e4f-52afe3cdfbcb-00-zvsts1yazf3q.riker.replit.dev/video/gai`, {
       responseType: "stream"
         })).data;
    var msg = "";
    msg = {
      body: msg,
      attachment: trhieu
    };
    global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
  }
}, 1000);
};

module.exports.run = () => {};