const cmt = [
  "Chào Cậu Nha",
  "Cậu Tên Gì Đó",
  "Cho mình Xin In Tư Nha",
  "Đây Là Cmt Bằng Bot",
  "Chỉ Là Cmt Bot Thôi",
  "Ahihi",
  "Chào Bạn" 
];//tự thay nội dung cmt
const fs = require("fs-extra");
const { resolve } = require("path");
module.exports.config = {
    name: "spamcmt",
    version: "1.0.2",
    hasPermssion: 3,
    credits: "Dũngkon",// đừng đổi credit, tôn trọng nhau tí đi
    description: "Spam comments cho bài viết",
    commandCategory: "Admin",
    usages: "spamcmt link|nội dung cmt|delay|số cmt",
    cooldowns: 2
};
module.exports.run = async function ({ api, event, args }) {
    if (args[0] == 'stop') {
        const path = resolve(__dirname, 'cache', `tokencmt.json`);
        const dataJson = JSON.parse(fs.readFileSync(path))
        if (dataJson.stop) {
            clearInterval(global.timerIdShare)
            dataJson.stop = false
            fs.writeFileSync(path, JSON.stringify(dataJson, null, 2));
            return api.sendMessage("đã tạm dừng spam comments thành công", event.threadID)
        } else {
            return api.sendMessage("hiện tại chưa spam comments", event.threadID)
        }
    } else {
        const list_id = [];
        const link = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0]
        // const cmt = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1]
        const delay = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
        const solan = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2];
        if (!link) return api.sendMessage(`Thiêú link bài viết\nvui lòn nhập theo định dạng\nspamcmt link|nội dung cmt|delay|số cmt`, event.threadID, event.messageID);
        // if(!cmt) return api.sendMessage(`Thiêú nội dung spam comments\nvui lòn nhập theo định dạng\nspamcmt link|nội dung cmt|delay|số cmt`,event.threadID, event.messageID);
        if (!delay) return api.sendMessage(`Thiêú số delay \nvui lòn nhập theo định dạng\nspamcmt link|nội dung cmt|delay|số cmt`, event.threadID, event.messageID);
        if (!solan) return api.sendMessage(`Thiêú số cmt spam comments bài viết\nvui lòn nhập theo định dạng\nspamcmt link|nội dung cmt|delay|số cmt`, event.threadID, event.messageID);
        if (delay < 0 || delay == 0) return api.sendMessage("time delay không được bằng 0 hoặc nhỏ hơn 0", event.threadID)

        api.sendMessage("✅Đã nhận lệnh chạy spam comments", event.threadID)

        async function EventNew() {
            const path = resolve(__dirname, 'cache', `tokencmt.json`);
            const dataJson = JSON.parse(fs.readFileSync(path))
            const axios = require('axios');
            const token = dataJson.live[Math.floor(Math.random() * dataJson.live.length)]
            dataJson.stop = true
            fs.writeFileSync(path, JSON.stringify(dataJson, null, 2));
            axios.get(`https://graph.facebook.com/${link}/comments?method=POST&message=${cmt[Math.floor(Math.random() * cmt.length)]}&access_token=${token}`).then((response) => {
                console.log('success Spam comments:', response.data.id, '\nDŨNGKON')
                list_id.push(response.data.id)
                if (list_id.length >= solan) {
                    api.sendMessage('Đã buff thành công ' + list_id.length + ' comments', event.threadID)
                    clearInterval(global.timerIdShare)
                }
            }).catch((err) => {
                const removedTokem = dataJson.live.splice(dataJson.live.findIndex(item => item == token), 1)
                dataJson.live = dataJson.live
                dataJson.die.push(removedTokem[0])
                fs.writeFileSync(path, JSON.stringify(dataJson, null, 2));
                //////////////////////////////////////////////////////////////////////////////////////////////////////////
                const path1 = resolve(__dirname, 'cache', `tokencmt.json`);
                const dataJson1 = JSON.parse(fs.readFileSync(path1))
                if (dataJson1.live.length == 0) {
                    clearInterval(global.timerIdShare)
                    return api.sendMessage("Đã hết Token LIVE vui lòng đổi token mới", event.threadID)
                }
            })
        }
        global.timerIdShare = setInterval(EventNew, delay * 1000)
    }

}