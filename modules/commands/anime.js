module.exports.config = {
  name: "anime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vtuan",
  description: "Xem ảnh",
  commandCategory: "Random-img",
  usages: "",
  cooldowns: 2
};

module.exports.run = async ({ api, event ,Users}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");

  const anh = require('./../../img/anime.json');
  var image1 = anh[Math.floor(Math.random() * anh.length)].trim();
  var image2 = anh[Math.floor(Math.random() * anh.length)].trim();
  var image3 = anh[Math.floor(Math.random() * anh.length)].trim();
  var image4 = anh[Math.floor(Math.random() * anh.length)].trim();

  function downloadAndSendImage(image,fileName,callback){
    request(image).pipe(fs.createWriteStream(__dirname + `/`+fileName)).on("close", callback);
  }
  let callback = function () {
    return api.sendMessage({
      body: "𝐀̉𝐧𝐡 𝐀𝐧𝐢𝐦𝐞 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 Đ𝐚̂𝐲\n𝐅𝐛 𝐀𝐝𝐦𝐢𝐧:fb.me//vanchiendzs",
      attachment: [
       fs.createReadStream(__dirname + `/1.png`), 
       fs.createReadStream(__dirname + `/2.png`), 
       fs.createReadStream(__dirname + `/3.png`), 
       fs.createReadStream(__dirname + `/4.png`), 
      ]
    }, event.threadID, () => {
      fs.unlinkSync(__dirname + `/1.png`);
      fs.unlinkSync(__dirname + `/2.png`);
      fs.unlinkSync(__dirname + `/3.png`);
      fs.unlinkSync(__dirname + `/4.png`);
    }, event.messageID);
  };

 downloadAndSendImage(image1,'1.png',()=>{
  downloadAndSendImage(image2,'2.png',()=>{
    downloadAndSendImage(image3,'3.png',()=>{
      
        downloadAndSendImage(image4,'4.png',callback)
        })
      })
    }) 
  }