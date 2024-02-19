module.exports.config = {
  name: "autodowncc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vtuan",
  description: "down",
  commandCategory: "Nhóm",
  usages: "",
  cooldowns: 5
};

const axios = require('axios');
const fs = require('fs');
const isURL = u => /^http(|s):\/\//.test(u);
const linkapi = "http://apis-01.trankhuong20723.repl.co/capcut/download?url="

const isCapCutVideoLink = (url) => {
  return /^(https?:\/\/(www\.)?capcut\.(net|com)\/(t|watch)\/[a-zA-Z0-9]+\/?).*/.test(url);
};


exports.handleEvent = async function(o) {
    try {
        const str = o.event.body;
        const send = msg => o.api.sendMessage(msg, o.event.threadID, o.event.messageID);

        if (isURL(str)) {
            if (isCapCutVideoLink(str)) {
                var res = (await axios.get(`${linkapi}${str}`))
              
                const stream = (await axios.get(res.data.data.video,{ responseType: "arraybuffer" })).data
              
                const path = __dirname+`/cache/1.mp4`;
              
              fs.writeFileSync(path, Buffer.from(stream, "utf-8"));
                send({body: `[ Auto Mẫu Video Capcut ]
              ──────────────────
              📝 Nội dung: ${res.data.data.tieude}
              ✏️ Mô tả: ${res.data.data.mota}
              ⚡ Lượt dùng: ${res.data.data.luotxem}`, attachment: fs.createReadStream(path)})
            }
        }
    } catch(e) {
        console.log('Error', e);
    }
};

module.exports.run = async ({ api, event, args, Threads }) => {}

