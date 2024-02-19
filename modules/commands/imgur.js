const imgur = require("imgur");
const fs = require("fs");
const { downloadFile } = require("../../utils/index");

module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mod tnt",
  description: "Imgur",
  commandCategory: "tiện ích",
  usages: "[reply]",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const { threadID, type, messageReply, messageID } = event;
  const ClientID = "c76eb7edd1459f3";

  if (type !== "message_reply" || messageReply.attachments.length === 0) 
    return api.sendMessage("Bạn phải reply một video, ảnh nào đó", threadID, messageID);

  imgur.setClientId(ClientID);
  const attachmentSend = [];

  async function getAttachments(attachments) {
    for (const data of attachments) {
      const ext = data.type === "photo" ? "jpg" :
                  data.type === "video" ? "mp4" :
                  data.type === "audio" ? "m4a" :
                  data.type === "animated_image" ? "gif" : "txt";

      const pathSave = __dirname + `/cache/${Date.now()}.${ext}`;
      await downloadFile(data.url, pathSave);
      attachmentSend.push(pathSave);
    }
  }

  await getAttachments(messageReply.attachments);

  let msg = "";

  for (const getImage of attachmentSend) {
    try {
      const getLink = await imgur.uploadFile(getImage);
      msg += `${getLink.link}\n`;
      fs.unlinkSync(getImage);
    } catch {
      fs.unlinkSync(getImage);
    }
  }

  return api.sendMessage(msg, threadID);
};