module.exports.config = {
  name: "vdanime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vtuan", //mod by vthien
  description: "Xem ảnh",
  commandCategory: "Random-img",
  usages: "",
  cooldowns: 2
};

module.exports.run = async ({ api, event ,Users}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const anh = require('./../../img/vdanime.json');
  var image1 = anh[Math.floor(Math.random() * anh.length)].trim();

  function downloadAndSendImage(image,fileName,callback){
    request(image).pipe(fs.createWriteStream(__dirname + `/`+fileName)).on("close", callback);
  }
  let callback = function () {
    return api.sendMessage({body: 
      "[💫] → Video anime của bạn đây\n[🍒] → Số video hiện có: 785\n[💓] → Update by:𝗩𝗮̆𝗻 𝗖𝗵𝗶𝗲̂́𝗻",
      attachment: [
       fs.createReadStream(__dirname + `/1.mp4`)
      ]
    }, event.threadID, () => {
      fs.unlinkSync(__dirname + `/1.mp4`);
    }, event.messageID);
  }; 
  downloadAndSendImage(image1,'1.mp4',callback)
      }