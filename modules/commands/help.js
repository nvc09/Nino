module.exports.config = {
  name: "help",
  version: "1.1.1",
  hasPermssion: 0,
  credits: "DC-Nam",//mod lại by táo táo
  description: "Xem danh sách lệnh và info",
  commandCategory: "Danh sách lệnh",
  usages: "[tên lệnh/all]",
  cooldowns: 5
};


module.exports.run = async function({api,event,args,Currencies,__GLOBAL}) {
  const { events } = global.client;
  const { commands } = global.client;
  const { threadID: tid, messageID: mid, senderID: sid } = event
  var type = !args[0] ? "" : args[0].toLowerCase()
  var msg = "",array = [],i = 0
  const cmds = global.client.commands
  const TIDdata = global.data.threadData.get(tid) || {}
  var prefix = TIDdata.PREFIX || global.config.PREFIX
  if (type == "all") {
      msg += `Dùng menu all để xem toàn bộ lệnh đang có trên bot!`
      return api.sendMessage(msg, tid, mid)
  }
  if (type == "all") return
  if (type) {
      for (const cmd of cmds.values()) {
          array.push(cmd.config.name.toString())
      }
      if (!array.find(n => n == args[0].toLowerCase())) {
          const stringSimilarity = require('string-similarity')
          commandName = args.shift().toLowerCase() || ""
          var allCommandName = [];
          const commandValues = cmds['keys']()
          for (const cmd of commandValues) allCommandName.push(cmd)
          const checker = stringSimilarity.findBestMatch(commandName, allCommandName)
          if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target)
          msg = `=== 『 HELP 』 ===\n━━━━━━━━━━━━━━━━\n➜ Không tìm thấy lệnh '${type}' trong hệ thống.\n➜ Lệnh gần giống được tìm thấy '${checker.bestMatch.target}'`
          api.sendMessage(msg, tid, mid)
      }
      const cmd = cmds.get(type).config
      msg = `➜ 𝗧𝗲̂𝗻: ${cmd.name} ( ${cmd.version} )\n➜ 𝗤𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻: ${TextPr(cmd.hasPermssion)}\n➜ 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: ${cmd.credits}\n➜ 𝗠𝗼̂ 𝘁𝗮̉: ${cmd.description}\n➜ 𝗧𝗵𝘂𝗼̣̂𝗰 𝗻𝗵𝗼́𝗺: ${cmd.commandCategory}\n➜ 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: ${cmd.usages}\n➜ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗰𝗵𝗼̛̀: ${cmd.cooldowns}s`
      api.sendMessage(msg, tid, mid)
  } else {
      CmdCategory()
      array.sort(S("nameModule"))
      msg += `Hãy dùng help + tên lệnh để xem cách dùng<3`
      api.sendMessage( msg1 + msg,event.threadID,event.messageID);
  }

function CmdCategory() {
      for (const cmd of cmds.values()) {
          const {
              commandCategory,
              hasPermssion,
              name: nameModule
          } = cmd.config
          if (!array.find(i => i.cmdCategory == commandCategory)) {
              array.push({
                  cmdCategory: commandCategory,
                  permission: hasPermssion,
                  nameModule: [nameModule]
              })
          } else {
              const find = array.find(i => i.cmdCategory == commandCategory)
              find.nameModule.push(nameModule)
          }
      }
  }
}

function S(k) {
  return function(a, b) {
      let i = 0;
      if (a[k].length > b[k].length) {
          i = 1
      } else if (a[k].length < b[k].length) {
          i = -1
      }
      return i * -1
  }
}

function TextPr(permission) {
  p = permission
  return p == 0 ? "Thành Viên" : p == 1 ? "Quản trị viên" : p = 2 ? "Admin bot" : "Toàn Quyền"
    }