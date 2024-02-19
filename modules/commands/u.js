const axios = require('axios');
const moment = require("moment-timezone");

module.exports.config = {
  name: "u",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DuyVuong", //vt mod font+api
  description: "Random video theo api - uptime",
  commandCategory: "Lệnh hệ thống",
  cooldowns: 3
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, Users }) => {
  const os = require('os');
  const platform = os.platform();
  const arch = os.arch();
  const cpu_model = os.cpus()[0].model;
  const core = os.cpus().length;
  const speed = os.cpus()[0].speed;
  const byte_fm = os.freemem();
  const byte_tm = os.totalmem();
  const gb_fm = (byte_fm / (1024 * 1024 * 1024)).toFixed(2);
  const gb_tm = (byte_tm / (1024 * 1024 * 1024)).toFixed(2);
  const u_mem = ((byte_tm - byte_fm) / (1024 * 1024 * 1024)).toFixed(2);
  let gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  const timeStart = Date.now();
  let name = await Users.getNameUser(event.senderID);
  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
 
 api.sendMessage({body: `🌸 === [ 𝗨𝗣𝗧𝗜𝗠𝗘 𝗠𝗜𝗥𝗔𝗜 ] === 🌸\n━━━━━━━━━━━━━━━━━━━\n[⏰] → 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio}\n[📲] → 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗯𝗼𝘁 𝗱𝗮̃ 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴: ${hours} 𝗴𝗶𝗼̛̀ ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆\n[📎] → 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵: ${global.config.PREFIX}\n[🖨️] → 𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻: 2.9.15\n[🏡] → 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n[👥] → 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n[📠] → 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴:\n[🛰️] → 𝗛𝗲̣̂ đ𝗶𝗲̂̀𝘂 𝗵𝗮̀𝗻𝗵: ${platform}\n[🖲️] → 𝗞𝗶𝗲̂̉𝘂 𝗔𝗿𝗰𝗵: ${arch}\n[🔋] → 𝗖𝗣𝗨: ${core} core(s) - ${cpu_model} - ${speed}MHz\n[🖱️] → 𝗗𝘂𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝘁𝗿𝗼̂́𝗻𝗴: ${gb_fm}GB (Đ𝗮̃ 𝗱𝘂̀𝗻𝗴 ${u_mem}GB 𝘁𝗿𝗲̂𝗻 𝘁𝗼̂̉𝗻𝗴 ${gb_tm}GB)\n[🔮] → 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}ms\n[🙇‍♂️] → 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗯𝗼̛̉𝗶: ${name} 𝘁𝗮̣𝗶 𝗻𝗵𝗼́𝗺 ${threadName}`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://sumiproject.io.vn/video/videogai')).data.url,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
 
}