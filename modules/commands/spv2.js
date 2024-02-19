module.exports.config = {
  name: "spam2",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Vtuan", 
  description: "spam nội dung nhiều lần và tag",
  commandCategory: "War",
  usages: "spam <nội dung>",
  cooldowns: 5,
  dependencies: {"moment-timezone": ""}
};

module.exports.run = async function({ api, event, args }) {
  const { sendMessage: vtuannn } = api;
  try {
      const botID = api.getCurrentUserID();
      const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
      var body = (args.length != 0) ? args.join(" ") : "𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n 𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n𝐇𝐨𝐭 𝐖𝐚𝐫 𝐍𝐠 𝐕𝐚̆𝐧 𝐂𝐡𝐢𝐞̂́𝐧🧸🧸\n", mentions = [], index = 0;
      var timedelay = 3 //thời gian gửi 1 tin nhắn
      let slsp= 10000000000000 /// số lần spam

      for(const idUser of listUserID) {

          body = "‎" + body;
          mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
          index -= 1;

      }
     for(let i = 1; i < slsp; i++){
         vtuannn({ body, mentions }, event.threadID);
       await new Promise(resolve => setTimeout(resolve, timedelay * 1000))
     }
  }
catch (e) { }
}