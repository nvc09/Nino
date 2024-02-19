module.exports.config = {
  name: "anhgai",
  version: "3.0.0",
  hasPermssion: 0,
  credit: "Vtuan",
  description: "hi gửi sticker and hinh anh",
  commandCategory: "Nhóm",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ api, event,Threads, Users }) => {
  const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐶ℎ𝑢̉ 𝑁ℎ𝑎̣̂𝑡'
  if (thu == 'Monday') thu = '𝑇ℎ𝑢̛́ 𝐻𝑎𝑖 '
  if (thu == 'Tuesday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎'
  if (thu == 'Wednesday') thu = '𝑇ℎ𝑢̛́ 𝑇𝑢̛'
  if (thu == "Thursday") thu = '𝑇ℎ𝑢̛́ 𝑁𝑎̆𝑚'
  if (thu == 'Friday') thu = '𝑇ℎ𝑢̛́ 𝑆𝑎́𝑢'
  if (thu == 'Saturday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎̉𝑦'
  let KEY = [ "hello","hi","hai","chào","chao","hí","híí","hì","hìì","lô","hii","helo","hê nhô"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi"] == "undefined", thread["hi"] == false) return
  else {
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Ho_Chi_Minh').format('HHmm');
    let data2 = [
      "𝐇𝐚𝐩𝐩𝐲=))","𝐯𝐮𝐢 𝐯𝐞̉:𝟑","𝐡𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 ❤","𝐧𝐡𝐢𝐞̂̀𝐮 𝐧𝐢𝐞̂̀𝐦 𝐯𝐮𝐢 😘"
    ];
    let text = data2[Math.floor(Math.random() * data2.length)]
    let session = (
    hours > 0001 && hours <= 400 ? "𝐬𝐚́𝐧𝐠 𝐭𝐢𝐧𝐡 𝐦𝐨̛" : 
    hours > 401 && hours <= 700 ? "𝐬𝐚́𝐧𝐠 𝐬𝐨̛́𝐦" :
    hours > 701 && hours <= 1000 ? "𝐬𝐚́𝐧𝐠" :
    hours > 1001 && hours <= 1200 ? "𝐭𝐫𝐮̛𝐚" : 
    hours > 1201 && hours <= 1700 ? "𝐜𝐡𝐢𝐞̂̀𝐮" : 
    hours > 1701 && hours <= 1800 ? "𝐜𝐡𝐢𝐞̂̀𝐮 𝐭𝐚̀" : 
    hours > 1801 && hours <= 2100 ? "𝐭𝐨̂́𝐢" : 
    hours > 2101 && hours <= 2400 ? "𝐭𝐨̂́𝐢 𝐦𝐮𝐨̣̂𝐧" : 
    "lỗi");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    const tdung = require('./../../img/gaivip.json');
    var image1 = tdung[Math.floor(Math.random() * tdung.length)].trim();
    var image2 = tdung[Math.floor(Math.random() * tdung.length)].trim();
    function vtuanhihi(image,vtuandz,callback){
      request(image).pipe(fs.createWriteStream(__dirname + `/`+vtuandz)).on("close", callback);
      }          let callback = function () {
           return api.sendMessage({
                body: `🎶『 𝐀𝐔𝐓𝐎𝐍𝐎𝐓𝐈 』🎶\n━━━━━━━━━━━━━\n➜ 𝐇𝐞𝐥𝐥𝐨 ${name} 𝐜𝐮𝐭𝐢 𝐩𝐡𝐨̂ 𝐦𝐚𝐢 𝐪𝐮𝐞\n『 💤 』 ➜𝐜𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐨̣̂𝐭 𝐛𝐮𝐨̂̉𝐢 ${session} ${text}\n[⏰] 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${thu} ${gio}`,
             attachment: [fs.createReadStream(__dirname + `/1.png`), fs.createReadStream(__dirname + `/2.png`)]
               }, event.threadID, () => {
                 fs.unlinkSync(__dirname + `/1.png`);
                 fs.unlinkSync(__dirname + `/2.png`);
               },event.messageID);
             };
                 vtuanhihi(image1,'1.png',()=>{vtuanhihi(image2,'2.png',callback)})
			
          let msg = {}
              api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 1500)
    }, event.messageID)
             }                                                                
            }
           }

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
		"successText": `${this.config.name} thành công`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["gai"] == "undefined" || data["gai"] == true) data["gai"] = false;
	else data["gai"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["gai"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}
