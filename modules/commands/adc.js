module.exports.config = {
    name: "adc",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "D-Jukie",
    description: "Áp dụng code từ buildtooldev và pastebin",
    commandCategory: "Admin",
    usages: "[reply or text]",
    cooldowns: 0,
    dependencies: {
        "pastebin-api": "",
        "cheerio": "",
        "request": ""
    }
};

module.exports.run = async function ({ api, event, args }) {
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const permission = ["100048286966787",""];
	if (!permission.includes(event.senderID)) return api.sendMessage(".callad có đứa định trộm mdl", event.threadID, event.messageID);
    const axios = require('axios');
    const fs = require('fs');
    const request = require('request');
    const cheerio = require('cheerio');
  if (!args[0]) return api.sendMessage({body: `📥 ==== [ 𝗣𝗔𝗦𝗧𝗘𝗕𝗜𝗡 ] ==== 📥\n━━━━━━━━━━━━━━━━━━━\n[ 𝟭 ] → 𝗔𝗱𝗰 + 𝗹𝗶𝗻𝗸 𝗽𝗮𝘀𝘁𝗲𝗯𝗶𝗻 đ𝗲̂̉ 𝘂𝗽 𝗹𝗼𝗮𝗱 𝗺𝗼𝗱𝘂𝗹𝗲 𝗹𝗲̂𝗻 𝗳𝗶𝗹𝗲\n[ 𝟮 ] → 𝗔𝗱𝗰 + 𝘁𝗲̂𝗻 𝗺𝗼𝗱𝘂𝗹𝗲 đ𝗲̂̉ 𝘂𝗽𝗹𝗼𝗮𝗱 𝗹𝗲̂𝗻 𝗽𝗮𝘀𝘁𝗲𝗯𝗶𝗻\n[⏰] → 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio}.`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://scrapi.apibot.repl.co/gai')).data.url,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
    const { join, resolve } = require("path");
    const { senderID, threadID, messageID, messageReply, type } = event;
  const picture = (await axios.get(`https://i.imgur.com/FVhjPU0.jpeg`, { responseType: "stream"})).data
    var name = args[0];
    if (type == "message_reply") {
        var text = messageReply.body;
    }
    if(!text && !name) return api.sendMessage({body: '[ 𝗣𝗔𝗦𝗧𝗘𝗕𝗜𝗡 ] → Vui lòng reply link muốn áp dụng code hoặc ghi tên file để up code lên pastebin!', attachment: (picture)}, threadID, messageID);
    if(!text && name) {
        var data = fs.readFile(
          `${__dirname}/${args[0]}.js`,
          "utf-8",
          async (err, data) => {
            if (err) return api.sendMessage(`[ 𝗣𝗔𝗦𝗧𝗘𝗕𝗜𝗡 ] → Lệnh ${args[0]} không tồn tại!`, threadID, messageID);
            const { PasteClient } = require('pastebin-api')
            const client = new PasteClient("R02n6-lNPJqKQCd5VtL4bKPjuK6ARhHb");
            async function pastepin(name) {
              const url = await client.createPaste({
                code: data,
                expireDate: 'N',
                format: "javascript",
                name: name,
                publicity: 1
              });
              var id = url.split('/')[3]
              return 'https://pastebin.com/raw/' + id
            }
            var link = await pastepin(args[1] || 'noname')
            return api.sendMessage(link, threadID, messageID);
          }
        );
        return
    }
    var urlR = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    var url = text.match(urlR);
    if (url[0].indexOf('pastebin') !== -1) {
        axios.get(url[0]).then(i => {
            var data = i.data
            fs.writeFile(
                `${__dirname}/${args[0]}.js`,
                data,
                "utf-8",
                function (err) {
                    if (err) return api.sendMessage(`[ 𝗣𝗔𝗦𝗧𝗘𝗕𝗜𝗡 ] → Đã xảy ra lỗi khi áp dụng code vào ${args[0]}.js`, threadID, messageID);
                    api.sendMessage({body: `[ 𝗣𝗔𝗦𝗧𝗘𝗕𝗜𝗡 ] → Đã áp dụng code vào ${args[0]}.js, sử dụng command load để hoàn tất!`, attachment: (picture)}, threadID, messageID);
                }
            );
        })
    }

    if (url[0].indexOf('buildtool') !== -1 || url[0].indexOf('tinyurl.com') !== -1) {
        const options = {
            method: 'GET',
            url: messageReply.body
        };
        request(options, function (error, response, body) {
            if (error) return api.sendMessage({body: '[ 𝗣𝗔𝗦𝗧𝗘𝗕𝗜𝗡 ] → Vui lòng chỉ reply vào link (không chứa gì khác ngoài link)', attachment: (picture)},  threadID, messageID);
            const load = cheerio.load(body);
            load('.language-js').each((index, el) => {
                if (index !== 0) return;
                var code = el.children[0].data
                fs.writeFile(`${__dirname}/${args[0]}.js`, code, "utf-8",
                    function (err) {
                        if (err) return api.sendMessage(`[ 𝗣𝗔𝗦𝗧𝗘𝗕𝗜𝗡 ] → Đã xảy ra lỗi khi áp dụng code mới cho "${args[0]}.js".`, threadID, messageID);
                        return api.sendMessage({body: `[ 𝗣𝗔𝗦𝗧𝗘𝗕𝗜𝗡 ] → Đã thêm code này vào "${args[0]}.js", sử dụng command load để hoàn tất!`, attachment: (picture)}, threadID, messageID);
                    }
                );
            });
        });
        return
    }
    if (url[0].indexOf('drive.google') !== -1) {
      var id = url[0].match(/[-\w]{25,}/)
      const path = resolve(__dirname, `${args[0]}.js`);
      try {
        await utils.downloadFile(`https://drive.google.com/u/0/uc?id=${id}&export=download`, path);
        return api.sendMessage(`[ 𝗣𝗔𝗦𝗧𝗘𝗕𝗜𝗡 ] → Đã thêm code này vào "${args[0]}.js" nếu xảy ra lỗi thì đổi file drive thành txt nhé!;`, threadID, messageID);
      }
      catch(e) {
        return api.sendMessage(`[ 𝗣𝗔𝗦𝗧𝗘𝗕𝗜𝗡 ] → Đ "${args[0]}.js".`, threadID, messageID);
      }
    }
  } 