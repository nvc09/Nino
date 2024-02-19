module.exports.config = {
  name: "ad3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✨..✨",
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
"https://i.imgur.com/nhu2PxR.mp4"
];
  var callback = () => api.sendMessage({body:`🚀=〘𝐓𝐇𝐎𝐍𝐆 𝐓𝐈𝐍 𝐀𝐃𝐌𝐈𝐍𝐁𝐎𝐓 〙=🚀\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n
『✒️』→𝗡𝗮𝗺𝗲: 𝙉𝙜 𝙑𝙖̆𝙣 𝘾𝙝𝙞𝙚̂́𝙣
『📋』→ 𝗔𝗴𝗲: 𝟏𝟒+
『👥』→ 𝙎𝙚𝙭: 𝐍𝐚𝐦
『🎂』→ 𝗬𝗲𝗮𝗿 𝗢𝗳 𝗕𝗶𝗿𝘁𝗵: 𝟎𝟕/𝟎𝟕/𝟐𝟎𝟎𝟗
『💫』→ 𝗛𝗲𝗶𝗴𝗵𝘁 / 𝗪𝗲𝗶𝗴𝗵𝗲𝗱: 
『💘』→𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽𝘀: Đ𝐨̣̂𝐜 𝐓𝐨𝐚̀𝐧 𝐓𝐡𝐚̂𝐧=)) 
『🗺️』→𝗟𝗶𝘃𝗶𝗻𝗴 𝗶𝗻: Đ𝐚̆́𝐤 𝐋𝐚̆́𝐤
『🌐』→𝗟𝗶𝘃𝗲 𝗶𝗻: 𝐕𝐢𝐞̣̂𝐭 𝐍𝐚𝐦
『👫』→𝗧𝗮𝘀𝘁𝗲: Đ𝐞̣𝐩 𝐭𝐫𝐲𝐲𝐲 , 𝐜𝐮𝐭𝐢𝐢𝐢 
『🌸』→𝗖𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿: 𝐃𝐞̂̃ 𝐭𝐢́𝐧𝐡 , 𝐝𝐞̂̃ 𝐠𝐚̂̀𝐧 , 𝐤𝐚𝐰𝐚𝐢𝐢, 𝐨𝐯𝐞𝐭𝐡𝐢𝐧𝐤𝐢𝐧𝐠, 
『💞』→𝗪𝗮𝗶𝗳𝘂: 𝐍𝐚𝐤𝐚𝐧𝐨 𝐍𝐢𝐧𝐨 , 𝐍𝐚𝐤𝐚𝐧𝐨 𝐌𝐢𝐤𝐮 , 𝐍𝐚𝐤𝐚𝐧𝐨 𝐈𝐭𝐬𝐮𝐤𝐢 , 𝐖𝐚𝐭𝐚𝐧𝐚𝐛𝐞 𝐀𝐤𝐚𝐫𝐢
━━━━━━━━━━━━━━━━━━
💻==〘 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 〙==💻

『☎️』→ 𝐒𝐃𝐓 & 𝐙𝐚𝐥𝐨: ẩn
『💻』→ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://www.facebook.com/vanchiendzs
『🎶』→ 𝐓𝐢𝐤 𝐓𝐨𝐤:https://www.tiktok.com/@ninokawaii
『✉️』→ 𝐄𝐦𝐚𝐢𝐥:ẩn  || 
━━━━━━━━━━━━━━━━━━
💸==〘 𝐃𝐎𝐍𝐀𝐓𝐄 〙==💸
『💵』→ 𝐌𝐨𝐦𝐨: không cần
『💵』→ 𝐭𝐡𝐞𝐬𝐢𝐞𝐮𝐫𝐞: ko cần
『💵』→ 𝐠𝐚𝐜𝐡𝐭𝐡𝐞𝟏𝐬: no\n━━━━━━━━━━━━━━━━━━\n
📝==〘 𝐏𝐑𝐎𝐁𝐋𝐄𝐌 〙==📝
『📢』 𝗟𝘂̛𝘂 𝗬́ :
📌- 𝑽𝒖𝒊 𝒍𝒐̀𝒏𝒈 𝒌𝒉𝒐̂𝒏𝒈 𝒔𝒑𝒂𝒎 𝒌𝒉𝒊 𝒔ử 𝒅𝒖̣𝒏𝒈 đ𝒆̂̉ 𝒕𝒓𝒂́𝒏𝒉 𝒅𝒊𝒆 𝒃𝒐𝒕
📌- 𝑯𝒂̣𝒏 𝒄𝒉𝒆̂́ 𝑺𝒑𝒂𝒎 𝒏𝒖𝒅𝒆 𝒌𝒉𝒐̂𝒏𝒈 𝒄𝒉𝒊 𝒍𝒂̀ 𝒄𝒉𝒂̣̆𝒏 𝒅𝒖̀𝒏𝒈 𝑩𝒐𝒕
📌- 𝑵𝒆̂́𝒖 𝒃𝒐𝒕 𝒌𝒐 𝒉𝒐𝒂̣𝒕 độ𝒏𝒈 𝒉𝒂𝒚 𝒃𝒊̣ 𝒍ỗ𝒊 𝒉𝒂𝒚 𝒍𝒊𝒆̂𝒏 𝒉ệ 𝒇𝒂𝒄𝒆𝒃𝒐𝒐𝒌 đ𝒆̂̉ đượ𝒄 𝒍𝒊𝒆̂𝒏 𝒉ệ 𝒕𝒓ự𝒄 𝒕𝒊𝒆̂́𝒑 𝒗ớ𝒊 𝒎𝒊̀𝒏𝒉
📌- 𝑯𝒂̃𝒚 𝒚𝒆̂𝒖 𝑨𝒅𝒎𝒊𝒏 𝑩𝒐𝒕 𝒗𝒊̀ 𝑨𝒅 𝒓𝒂̂́𝒕 𝒅𝒂̉𝒎 𝒅𝒂𝒏\n━━━━━━━━━━━━━━━━━━\n
✨➾𝗖𝗮̉𝗺 𝗼̛𝗻 𝘃𝗮̀ 𝘆𝗲̂𝘂 𝗺𝗻 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺, 𝗵𝗮̃𝘆 𝗱𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝗕𝗼𝘁 𝘃𝗮̀ 𝗔𝗱 𝗻𝗵𝗮𝗮 <𝟯

▱▱▱▱▱▱▱▱▱▱▱▱▱

『💻』→〘 𝐁𝐨𝐭 𝐝𝐮̛𝐨̛̣𝐜 𝐝𝐢𝐞̂̀𝐮 𝐡𝐚̀𝐧𝐡 𝐛𝐨̛̉𝐢 𝐕𝐜𝐡𝐢𝐞𝐧𝐧💤 〙 `,attachment: fs.createReadStream(__dirname + "/cache/ad3.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad3.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ad3.mp4")).on("close",() => callback());
   };