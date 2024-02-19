module.exports.config = {
  name: "prefix",	
  version: "4.0.0", 
  hasPermssion: 0,
  credits: "Vtuan",
  description: "sos", 
  commandCategory: "Hệ Thống",
  usages: "",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event, Threads }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const moment = require("moment-timezone");
  var times = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY")
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const timeStart = Date.now();
  const tdung = require('./../../img/gaivip.json');
  var image1 = tdung[Math.floor(Math.random() * tdung.length)].trim();
  var image2 = tdung[Math.floor(Math.random() * tdung.length)].trim();
  function vtuanhihi(image,vtuandz,callback){
    request(image).pipe(fs.createWriteStream(__dirname + `/`+vtuandz)).on("close", callback);
  }
  if (body.toLowerCase() == "Prefix" || (body.toLowerCase() == "prefix")) {
    let callback = function () {
          return api.sendMessage({
        body: `====『 𝙿𝚁𝙴𝙵𝙸𝚇 』====\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n→𝙿𝚛𝚎𝚏𝚒𝚡 𝚌𝚞̉𝚊 𝚗𝚑𝚘́𝚖: ${prefix}\n→𝙿𝚛𝚎𝚏𝚒𝚡 𝚑𝚎̣̂ 𝚝𝚑𝚘̂́𝚗𝚐: ${global.config.PREFIX}\n→𝚃𝚎̂𝚗 𝚋𝚘𝚝: ${global.config.BOTNAME}\n→𝙱𝚘𝚝 𝚑𝚒𝚎̣̂𝚗 𝚌𝚘́ ${client.commands.size} 𝚕𝚎̣̂𝚗𝚑\n→𝑃𝑖𝑛𝑔: ${Date.now() - timeStart}ms\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『  ${thu} || ${times} 』`,
        attachment: [fs.createReadStream(__dirname + `/1.png`), fs.createReadStream(__dirname + `/2.png`)]
      }, event.threadID, () => {
        fs.unlinkSync(__dirname + `/1.png`);
        fs.unlinkSync(__dirname + `/2.png`);
      },event.messageID);
    };
        vtuanhihi(image1,'1.png',()=>{vtuanhihi(image2,'2.png',callback)})
 }
}

module.exports.run = async ({ api, event, args, Threads }) => {}


