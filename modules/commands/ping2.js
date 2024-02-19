module.exports.config = {
  name: "ping2",
  version: "0.0.3",
  hasPermssion: 1,
  credits: "Mirai Team",
  description: "Tag toàn bộ thành viên trong nhóm",
  commandCategory: "Box chat",
  usages: "< nội dung >",
  cooldowns: 10
};

module.exports.run = async function({ api, event, args, Threads }) { 
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗡𝗵𝗮̣̂𝘁'
  if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝟮'
  if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝟯'
  if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝟰'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝟱'
  if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝟲'
  if (thu == 'Saturday') thu = '𝗧𝗵𝘂̛́ 𝟳'
const res = await axios.get("https://i.imgur.com/QywKMe3.jpg");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download = (await axios.get(data, {
      responseType: "stream"
    })).data;
  try {
    var all = (await Threads.getInfo(event.threadID)).participantIDs;
    all.splice(all.indexOf(api.getCurrentUserID()), 1);
    all.splice(all.indexOf(event.senderID), 1);
    var body = (args.length != 0) ? args.join(" "):"𝗗𝗮̣̂𝘆 𝘁𝘁 𝗱𝗲̂̉ 𝗮𝗻𝗵 𝗸𝗶𝗲̂́𝗺 𝗻𝘆 𝗰𝗵𝗼 𝗻𝗮̀𝗼 𝗺𝗮̂́𝘆 𝗲𝗺 𝗼̛𝗶🌸", mentions = [], index = 0;

    for (let i = 0; i < all.length; i++) {
        if (i == body.length) body += body.charAt(body.length );
        mentions.push({
          tag: body,
          id: all[i],
          fromIndex: i
        });
      }

    return api.sendMessage({ body: `🍑===[ 𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 ]==🍑\n\n[💬] 𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠: ${body}\n\n[⏰] 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${thu} ${gio}\n━━━━━━━━━━━━\n🌸 Bot🍒 🌸`, attachment: download, mentions }, event.threadID, event.messageID);

  }
  catch (e) { return console.log(e); }
}