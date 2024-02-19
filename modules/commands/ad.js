module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vchien",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "Tiện ích",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/3ngcgvN.mp4",
" https://i.imgur.com/uubCDXG.mp4"];
  var callback = () => api.sendMessage({body:`━━━━━━━[𝙷𝚎𝚕𝚕𝚘]━━━━━━━\n→𝚃𝚑𝚘̂𝚗𝚐 𝚃𝚒𝚗 𝙰𝚍𝚖𝚒𝚗 𝙱𝚘𝚝\n𝙵𝚋:https://www.facebook.com/vanchiendzs\n𝚉𝚊𝚕𝚘:𝟶𝟹𝟹𝟿𝟻𝟾𝟸𝟿𝟸𝟸\n𝚃𝚒𝚔𝚃𝚘𝚔:𝚗𝚒𝚗𝚘𝚔𝚊𝚠𝚊𝚒𝚒𝚒\n[💤]𝐀𝐝𝐦𝐢𝐧 𝐂𝐡𝐮̛𝐚 𝐂𝐨́ 𝐍𝐠𝐲 𝐍𝐡𝐚𝐚𝐚=))\n`,attachment: fs.createReadStream(__dirname + "/cache/ad.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ad.mp4")).on("close",() => callback());
   };
   //tự edit body nhá ...=thay thông tin 
   //Sen code lại th nên bớt soi 
   //cách lấy ảnh gắn ở trên 
   //B1 Truy cập https://imgur.com chọn newpost
   //B2 Gắn ảnh từ máy tính lên đó hay điện thoại cx đc tùyq   //B3 Copy link như trên rồi thêm .jpg vào là done 
   //Chúc thành công
