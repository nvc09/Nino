module.exports.config = {
  name: "\n",
  version: "3.0.0",
  hasPermssion: 0,
  credits: "Vtuan",
  description: "sailenh",
  commandCategory: "Hệ Thống",
  usages: "Công cụ",
  cooldowns: 0
};

module.exports.run = async ({ api, event ,Users}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const moment = require("moment-timezone");
  const time = process.uptime(),hours = Math.floor(time / (60 * 60)),	minutes = Math.floor((time % (60 * 60)) / 60),seconds = Math.floor(time % 60);
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const timeStart = Date.now();
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;  
  const tdung = require('./../../img/gaivip.json');
  var image1 = tdung[Math.floor(Math.random() * tdung.length)].trim();
  var image2 = tdung[Math.floor(Math.random() * tdung.length)].trim();
  function vtuanhihi(image,vtuandz,callback){
    request(image).pipe(fs.createWriteStream(__dirname + `/`+vtuandz)).on("close", callback);
  }

  let callback = function () {
    return api.sendMessage({
      body: `====『 ${global.config.BOTNAME} 』====\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ${gio} 』\n➜𝑇𝑖𝑚𝑒 𝑜𝑛𝑙: ${hours} : ${minutes} : ${seconds}\n➜𝑃𝑟𝑒𝑓𝑖𝑥: ${global.config.PREFIX}\n➜𝑃𝑖𝑛𝑔: ${Date.now() - timeStart}ms\n➜𝐵𝑜𝑡 𝑐𝑜́: ${client.commands.size} 𝑙𝑒̣̂𝑛ℎ\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝐿𝑒̣̂𝑛ℎ 𝑏𝑎̣𝑛 đ𝑎𝑛𝑔 𝑑𝑢̀𝑛𝑔 𝑐𝑜́ 𝑝ℎ𝑎̉𝑖 𝑙𝑒̣̂𝑛ℎ 2fa ℎ𝑎𝑦 𝑘ℎ𝑜̂𝑛𝑔?`,
      attachment: [fs.createReadStream(__dirname + `/1.png`), fs.createReadStream(__dirname + `/2.png`)]
    }, event.threadID, () => {
      fs.unlinkSync(__dirname + `/1.png`);
      fs.unlinkSync(__dirname + `/2.png`);
    }, event.messageID);
  };
      vtuanhihi(image1,'1.png',()=>{vtuanhihi(image2,'2.png',callback)})

}