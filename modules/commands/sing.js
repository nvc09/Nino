const fs = require('fs');
const ytdl = require('ytdl-core');
const { resolve } = require('path');
async function downloadMusicFromYoutube(link, path) {
  var timestart = Date.now();
  if(!link) return 'Thiếu link'
  var resolveFunc = function () { };
  var rejectFunc = function () { };
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
    ytdl(link, {
            filter: format =>
                format.quality == 'tiny' && format.audioBitrate == 128 && format.hasAudio == true
        }).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),

                author: data.videoDetails.author.name,
                timestart: timestart
            }
            resolveFunc(result)
        })
  return returnPromise
}
module.exports.config = {
    name: "sing",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Phát nhạc thông qua link YouTube hoặc từ khoá tìm kiếm",
    commandCategory: "Công Cụ",
    usages: "[searchMusic]",
    cooldowns: 0
}

module.exports.handleReply = async function ({ api, event, handleReply, Users }) {
    const axios = require('axios')

   const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = 'Chủ Nhật'
    if (thu == 'Monday') thu = 'Thứ Hai'
    if (thu == 'Tuesday') thu = 'Thứ Ba'
    if (thu == 'Wednesday') thu = 'Thứ Tư'
    if (thu == "Thursday") thu = 'Thứ Năm'
    if (thu == 'Friday') thu = 'Thứ Sáu'
    if (thu == 'Saturday') thu = 'Thứ Bảy'
    let name = await Users.getNameUser(event.senderID);


    const { createReadStream, unlinkSync, statSync } = require("fs-extra")
    try {
        var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
        var data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body -1], path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('𝐁𝐚̀𝐢 𝐠𝐢̀ 𝐦𝐚̀ 𝐝𝐚̀𝐢 𝐝𝐮̛̃ 𝐯𝐚̣̂𝐲, đ𝐨̂̉𝐢 𝐛𝐚̀𝐢 đ𝐢 😠', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
            body: `==『 𝚃𝚒𝚎̣̂𝚖 𝙽𝚑𝚊̣𝚌 』==\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➝𝙱𝚊̀𝚒 𝚑𝚊́𝚝: ${data.title}\n➝𝚃𝚑𝚘̛̀𝚒 𝙻𝚞̛𝚘̛̣𝚗𝚐: ${this.convertHMS(data.dur)}\n➝𝚃𝚎̂𝚗 𝚔𝚎̂𝚗𝚑: ${data.author}\n➝𝙾𝚛𝚍𝚎𝚛 𝚖𝚞𝚜𝚒𝚌: ${name}\n➝𝚃𝚒𝚖𝚎 𝚡𝚞̛̉ 𝚕𝚒́: ${Math.floor((Date.now()- data.timestart)/1000)} 𝚐𝚒𝚊̂𝚢\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n=== 「`+ thu +` || `+ gio + `」 ===`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)

    }
    catch (e) { return console.log(e) }
}
module.exports.convertHMS = function(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
}
module.exports.run = async function ({ api, event, args, Users}) {
  let axios = require('axios');

  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = 'Chủ Nhật'
    if (thu == 'Monday') thu = 'Thứ Hai'
    if (thu == 'Tuesday') thu = 'Thứ Ba'
    if (thu == 'Wednesday') thu = 'Thứ Tư'
    if (thu == "Thursday") thu = 'Thứ Năm'
    if (thu == 'Friday') thu = 'Thứ Sáu'
    if (thu == 'Saturday') thu = 'Thứ Bảy'
    let name = await Users.getNameUser(event.senderID);
    if (args.length == 0 || !args) return api.sendMessage('==== 『 𝐄𝐑𝐎𝐋 』 ==== \n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝗣𝗵𝗮̂̀𝗻 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 đ𝗲̂̉ 𝘁𝗿𝗼̂́𝗻𝗴!\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n=== 「'+ thu +'||'+ gio + '」 ===', event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) { 
        try {
            return api.sendMessage({ 
                body: `có cc`}, event.threadID, ()=> fs.unlinkSync(path), 
            event.messageID)       
        }
        catch (e) { return console.log(e) }
    } else {
          try {
            var link = [],
                msg = "",
                num = 0,
                numb = 0;
             var imgthumnail = []
            const Youtube = require('youtube-search-api');
            var data = (await Youtube.GetListByKeyword(keywordSearch, false,6)).items;
            for (let value of data) {
              link.push(value.id);
                let linkthumnail = `https://img.youtube.com/vi/${value.id}/hqdefault.jpg`;
                let getthumnail = (await axios.get(`${linkthumnail}`, {
                    responseType: 'arraybuffer'
                })).data;
                  let datac = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${value.id}&key=AIzaSyANZ2iLlzjDztWXgbCgL8Oeimn3i3qd0bE`)).data;

              let channel = datac.items[0].snippet.channelTitle;
              num = num+=1
  if (num == 1) var num1 = "1. "
  if (num == 2) var num1 = "2. "
  if (num == 3) var num1 = "3. "
  if (num == 4) var num1 = "4. "
  if (num == 5) var num1 = "5. "
  if (num == 6) var num1 = "6. "

              msg += (`${num1} - ${value.title} \n➝𝚃𝚑𝚘̛̀𝚒 𝙻𝚞̛𝚘̛̣𝚗𝚐: ${value.length.simpleText} \n➝𝚔𝚎̂𝚗𝚑: ${channel}\n━━━━━━━━━━━\n`);
            }
            var body = `==『 𝙼𝚘̛̀𝚒 𝚋𝚊̣𝚗 𝚘𝚛𝚍𝚎𝚛 𝚖𝚎𝚗𝚞  』==\n━━━━━━━━━━━\n${msg}➝ 𝙼𝚘̛̀𝚒 ${name} 𝚝𝚛𝚊̉ 𝚕𝚘̛̀𝚒 𝚝𝚒𝚗 𝚗𝚑𝚊̆́𝚗 𝚗𝚊̀𝚢 𝚔𝚎̀𝚖 𝚜𝚘̂́ 𝚝𝚑𝚞̛́ 𝚝𝚞̛̣ 𝚖𝚊̀ 𝚋𝚊̣𝚗 𝚖𝚞𝚘̂́𝚗 𝚗𝚐𝚑𝚎 𝚋𝚘𝚝 𝚜𝚎̃ 𝚘𝚛𝚍𝚎𝚛 𝚌𝚑𝚘 𝚋𝚊̣𝚗`
            return api.sendMessage({
              body: body
            }, event.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              link
            }), event.messageID);
          } catch(e) {
            return api.sendMessage('Đã xảy ra lỗi, vui lòng thử lại trong giây lát!!\n' + e, event.threadID, event.messageID);
        }
    }
    }