module.exports.config = {
  name: "anti",
  eventType: ["log:thread-name"],
  version: "1.0.1",
  credits: "Mirai Team",//mod anti by vtuan
  description: "Cập nhật thông tin nhóm một cách nhanh chóng",
    envConfig: {
        autoUnsend: true,
        sendNoti: true,
        timeToUnsend: 10
    }
};

module.exports.run = async function ({ event, api, Threads,Users }) {
  const fs = require("fs");
  var iconPath = __dirname + "/emoji.json";
  if (!fs.existsSync(iconPath)) fs.writeFileSync(iconPath, JSON.stringify({}));
    const { threadID, logMessageType, logMessageData } = event;
    const { setData, getData } = Threads;

    const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["adminUpdate"] != "undefined" && thread["adminUpdate"] == false) return;

    try {
        let dataThread = (await getData(threadID)).threadInfo;
        switch (logMessageType) {        
            case "log:thread-name": {
              const fs = require('fs');
              const nameboxPath = __dirname + '/cache/data/namebox.json';
              let nameboxData = JSON.parse(fs.existsSync(nameboxPath) ? fs.readFileSync(nameboxPath) : "[]");
                  const namebox = nameboxData.find(entry => entry.threadID == threadID);
                  if (namebox && namebox.status == true) {
                      api.setTitle(namebox.namebox, threadID);
                      api.sendMessage(`Hiện tại nhóm đang bật chế độ anti tên nhóm, quản trị viên dùng antinamebox off để tắt!`, threadID)
                }
                break;
            }
        }
        await setData(threadID, { threadInfo: dataThread });
    } catch (e) { console.log(e) };
}
