module.exports.config = {
	name: "duyet",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "DungUwU mod by Nam",
	description: "duyệt box dùng bot xD",
	commandCategory: "Admin",
    cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const dataPending = __dirname + "/cache/pendingdThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
	if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}
module.exports.handleReply = async function ({ event, api, Currencies, handleReply, Users, args }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
    let data = JSON.parse(fs.readFileSync(dataPath));
    let dataP = JSON.parse(fs.readFileSync(dataPending));
    let idBox = (args[0]) ? args[0] : threadID;
  switch (type) {
        case "pending": {
          switch (body) {
                case `A`: {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`» Phê duyệt thành công box:\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
        }
      }
    }
  }
module.exports.run = async  ({ event, api, args, Threads, Users, handleReply  }) => {
	const { threadID, messageID, senderID } = event;
	let data = JSON.parse(fs.readFileSync(dataPath));
  let dataP = JSON.parse(fs.readFileSync(dataPending));
  let msg = "";
  var lydo = args.splice(2).join(" ");
  let idBox = (args[0]) ? args[0] : threadID;
        if (args[0] == "list" || args[0] == "l") {
    msg = "[ 𝙼𝙾𝙳𝙴 ] - 𝙺𝚎̀𝚖 𝚃𝚑𝚎𝚘 𝙳𝚊𝚗𝚑 𝚂𝚊́𝚌𝚑 Đ𝚊̃ Đ𝚞̛𝚘̛̣𝚌 𝙳𝚞𝚢𝚎̣̂𝚝\n━━━━━━━━━━━━━━━━━━";
    let count = 0;
    for (e of data) {
       let name = (await api.getThreadInfo(e)).name || "Tên không tồn tại";
      msg += `\n\n(${count += 1}). ${name}\n[🔰] → 𝗜𝗗: ${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "a",
        })
    }, messageID);
        }
     else if (args[0] == "pending" || args[0] == "p") {
    	msg = `=====「 DS BOX CHƯA DUYỆT: ${dataP.length} 」 ====`;
    	let count = 0;
    	for (e of dataP) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "pending",
        })
    }, messageID);
     }
       else if (args[0] == "help" || args[0] == "h") {
         const tst = (await Threads.getData(String(event.threadID))).data || {};
  const pb = (tst.hasOwnProperty("PREFIX")) ? tst.PREFIX : global.config.PREFIX;
  const nmdl = this.config.name
  const cre = this.config.credits
        return api.sendMessage(`=====「 𝙳𝚞𝚢𝚎̣̂𝚝 𝙱𝚘𝚡  」=====\n━━━━━━━━━━━━━━━━━━\n\n${pb}${nmdl} 𝚕/𝚕𝚒𝚜𝚝=> 𝚡𝚎𝚖 𝚍𝚊𝚗𝚑 𝚜𝚊́𝚌𝚑 𝚋𝚘𝚡 đ𝚊̃ 𝚍𝚞𝚢𝚎̣̂𝚝 🎀\n\n${pb}${nmdl} 𝚙/𝚙𝚎𝚗𝚍𝚒𝚗𝚐 => 𝚡𝚎𝚖 𝚍𝚊𝚗𝚑 𝚜𝚊́𝚌𝚑 𝚋𝚘𝚡 𝚌𝚑𝚞̛𝚊 𝚍𝚞𝚢𝚎̣̂𝚝 🎀\n\n${pb}${nmdl} 𝚍/𝚍𝚎𝚕 => 𝚔𝚎̀𝚖 𝚝𝚑𝚎𝚘 𝙸𝙳 𝚋𝚒̣ 𝚡𝚘́𝚊 𝚌𝚞̉𝚊 𝚋𝚘𝚡 🎀\n\n${pb}${nmdl} => 𝚔𝚎̀𝚖 𝚝𝚑𝚎𝚘 𝙸𝙳 đ𝚊̃ đ𝚞̛𝚘̛̣𝚌 𝚍𝚞𝚢𝚎̣̂𝚝 🎀\n`, threadID, messageID);
       }
    else if (args[0] == "del" || args[0] == "d") {
    	let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
       const name = await Users.getNameUser(event.senderID)
    let uid = event.senderID;
    var time = moment.tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY || HH:mm:ss');
      idBox = (args[1]) ? args[1] : event.threadID;
      if (isNaN(parseInt(idBox))) return api.sendMessage({body: "[ 𝗗𝘂𝘆𝗲̣̂𝘁 𝗗𝗲𝗹 ] →  Không phải một con số",attachment: (await axios.get((await axios.get(`https://sumiproject.io.vn/images/anime`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID, threadID, messageID);
    	if (!data.includes(idBox)) return api.sendMessage({body: "[ 𝗗𝘂𝘆𝗲̣̂𝘁 𝗗𝗲𝗹 ] →  Nhóm không được duyệt từ trước",attachment: (await axios.get((await axios.get(` https://sumiproject.io.vn/images/anime`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID,threadID, messageID);
      
    	api.sendMessage({body: `====『 𝙳𝚄𝚈𝙴𝚃 𝙳𝙴𝙻 』 ====\n━━━━━━━━━━━━━━━━━━\n[👤] → 𝙽𝚐𝚞̛𝚘̛̀𝚒 𝙶𝚘̃  : ${name}\n[👨‍👩‍👧‍👦] → 𝙽𝚑𝚘́𝚖 ${threadName}\n[🔰] → 𝙸𝙳: ${idBox} \n[🌟] → Đ𝚊̃ 𝙱𝚒̣ Đ𝚊́ 𝙺𝚑𝚘̉𝚒 𝙳𝚊𝚗𝚑 𝚂𝚊́𝚌𝚑 𝚂𝚞̛̉ 𝙳𝚞̣𝚗𝚐 𝙱𝚘𝚝\n[⏰] → 𝚅𝚊̀𝚘 𝙻𝚞́𝚌 : ${time}\n━━━━━━━━━━━━━━━━━━\n[😻] → 𝙽𝚎̂́𝚞 𝙼𝚞𝚘̂́𝚗 𝚂𝚞̛̉ 𝙳𝚞̣𝚗𝚐 𝙻𝚊̣𝚒 𝙻𝚒𝚎̂𝚗 𝙷𝚎̣̂ 𝙰𝚍𝚖𝚒𝚗\n[🌐] → 𝙻𝚒𝚗𝚔 : https://www.facebook.com/vanchiendzs`, attachment: (await axios.get((await axios.get(` https://sumiproject.io.vn/images/anime`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID,  () => {
    		data.splice(data.indexOf(idBox), 1);
    		fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    	}, messageID)
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage("[ 𝙺𝙸𝙴̂̉𝙼 𝙳𝚄𝚈𝙴̣̂𝚃 ]\n━━━━━━━━━━━━━━━━━━\n[🔰] → 𝙸𝙳 𝙱𝚊̣𝚗 𝙽𝚑𝚊̣̂𝚙 𝙺𝚑𝚘̂𝚗𝚐 𝙷𝚘̛̣𝚙 𝙻𝚎̣̂", threadID, messageID);
  else if (data.includes(idBox)) api.sendMessage({body: `==== [ 𝙺𝙸𝙴̂̉𝙼 𝙳𝚄𝚈𝙴̣̂𝚃 ] ====\n━━━━━━━━━━━━━━━━━━\n[🔰] → 𝙸𝙳: ${idBox} Đ𝚊̃ Đ𝚞̛𝚘̛̣𝚌 𝙿𝚑𝚎̂ 𝙳𝚞𝚢𝚎̣̂𝚝 𝚃𝚞̛̀ 𝙻𝚞́𝚌 𝚃𝚛𝚞̛𝚘̛́𝚌`,attachment: (await axios.get((await axios.get(` https://sumiproject.io.vn/images/anime`)).data.url, {
                    responseType: 'stream'
                })).data
}, event.threadID, threadID, messageID);
  else api.sendMessage("[💤] → 𝙽𝚑𝚘́𝚖 𝙲𝚞̉𝚊 𝙱𝚊̣𝚗 Đ𝚊̃ Đ𝚞̛𝚘̛̣𝚌 𝙰𝚍𝚖𝚒𝚗 𝙳𝚞𝚢𝚎̣̂𝚝 💞",idBox, (error, info)=> {
    if (error) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] ➠ 𝙻𝚘̂̃𝚒 𝙸𝙳 𝙺𝚑𝚘̂𝚗𝚐 𝙷𝚘̛̣𝚙 𝙻𝚎̣̂, Đ𝚊̉𝚖 𝙱𝚊̉𝚘 Đ𝚞́𝚗𝚐 𝙸𝙳 𝚅𝚊̀ 𝙰𝚌𝚌 𝙱𝚘𝚝 𝙾̛̉ 𝚃𝚛𝚘𝚗𝚐 𝙱𝚘𝚡", threadID, messageID);
      if (error) return api.sendMessage(`» Đã xảy ra lỗi`, event.threadID, event.messageID)
  
      else api.changeNickname(`[  ${global.config.PREFIX} ] • ${global.config.BOTNAME}`, event.threadID, api.getCurrentUserID())
   		
      const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
      
      axios.get('https://sumiproject.io.vn/images/anime ').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
      api.sendMessage({body: `==== 『 𝙺𝙴̂́𝚃 𝙽𝙾̂́𝙸 𝚃𝙷𝙰̀𝙽𝙷 𝙲𝙾̂𝙽𝙶 』====\n━━━━━━━━━━━━━━━━━━\n[🤖] → 𝙿𝚛𝚎𝚏𝚒𝚡 𝙻𝚊̀: [ ${global.config.PREFIX} ]\n[🥖] → 𝙽𝚑𝚊̣̂𝚙: ${global.config.PREFIX}𝙰𝚍𝚖𝚒𝚗 𝙻𝚒𝚜𝚝 𝚂𝚎̃ 𝙲𝚘́ 𝚃𝚑𝚘̂𝚗𝚐 𝚃𝚒𝚗 𝙰𝚍𝚖𝚒𝚗 𝙱𝚘𝚝\n[🍞] → 𝙱𝚘𝚝 𝙻𝚘̂̃𝚒 𝙸𝚋 𝙰𝚍𝚖𝚒𝚗: https://www.facebook.com/vanchiendzs\n━━━━━━━━━━━━━━━━━━\n[🥯] → 𝚃𝚑𝚒𝚜 𝙱𝚘𝚝 𝙼𝚊𝚝𝚎 𝙱𝚢: ${global.config.BOTNAME}\n[🥨] → 𝚃𝚑𝚊𝚗𝚔 𝚈𝚘𝚞 𝚏𝚘𝚛𝚞𝚜𝚒𝚗𝚐\n[👤] → 𝙰𝚍𝚖𝚒𝚗 𝙱𝚘𝚝: 𝑽𝒂̆𝒏 𝑪𝒉𝒊𝒆̂́𝒏 💤`,
						attachment: fs.createReadStream(__dirname + `/cache/duyet.${ext}`)
					}, event.threadID,() => fs.unlinkSync(__dirname + `/cache/duyet.${ext}`), event.messageID, idBox);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/duyet.${ext}`)).on("close", callback);
			}) 
   		if (error) return api.sendMessage("[ 𝙼𝙾𝙳𝙴 ] → 𝙻𝚘̂̃𝚒 𝙸𝙳 𝙺𝚑𝚘̂𝚗𝚐 𝙷𝚘̛̣𝚙 𝙻𝚎̣̂, Đ𝚊̉𝚖 𝙱𝚊̉𝚘 Đ𝚞́𝚗𝚐 𝙸𝙳 𝙱𝚘𝚡 𝚅𝚊̀ 𝙰𝚌𝚌 𝙱𝚘𝚝 𝙲𝚘́ 𝚃𝚛𝚘𝚗𝚐 𝙱𝚘𝚡", threadID, messageID);
   		else {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`==== [ 𝙳𝚞𝚢𝚎̣̂𝚝 𝙱𝚘𝚡 ] ====\n━━━━━━━━━━━━━━━━━━\n[🔰] → 𝙿𝚑𝚎̂ 𝙳𝚞𝚢𝚎̣̂𝚝 𝚃𝚑𝚊̀𝚗𝚑 𝙲𝚘̂𝚗𝚐 𝙽𝚑𝚘́𝚖 𝙲𝚘́ 𝙸𝙳: ${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
   	});
}