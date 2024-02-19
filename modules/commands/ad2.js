module.exports.config = {
  name: "ad2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vchien",
  description: "fb của admin cuti",
  commandCategory: "fb admin",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
    "https://i.imgur.com/3ngcgvN.mp4",
    "https://i.imgur.com/uubCDXG.mp4",
    ];
  var callback = () => api.sendMessage({body:`===== [𝙵𝚋 𝙰𝚍𝚖𝚒𝚗] =====\n━━━━━━━━━━━━━━━━━━\n\n→ [🧸]:Fb:fb.me//vanchiendzs\n→ [💤] 𝐀𝐝𝐦𝐢𝐧 𝐂𝐡𝐮̛𝐚 𝐍𝐠𝐲 𝐍𝐡𝐚𝐚𝐚 =))\n ━━━━━━━━━━━━━━━━━━\n\n→ [🍓] 𝐘𝐞̂𝐮 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐍𝐡𝐢𝐞̂̀𝐮 <𝟑`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
