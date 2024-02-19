let stopWar = false; 
module.exports.config = {
    name: "war",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "War nát boxchat",
   usePrefix:false,
    commandCategory: "Spam",
    usages: "war",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}
module.exports.run = async function ({ api, args, event }) {

if (args[0] === 'stop') {
    stopWar = true;
    return api.sendMessage("✅", event.threadID);
}

var mention = Object.keys(event.mentions)[0];
let name = event.mentions[mention];
var mentions = [
    { tag: name, id: mention }
];
  var sendMessages = [
"${userName} đụ lồn sánh cặc",
"${userName} rén à",
"${userName} ẳng lên",
"${userName} sao im thế",
"${userName} không lại à😂",
"${userName} nhóc ác",
"${userName} mõm à",
"${userName} sủa đi",
"${userName} không lại à",
"${userName} sao câm vậy",
"${userName} đéo nói được gì à😂",
"${userName} non vc",
"${userName} nghĩ bằng tao không",
"${userName} spam với ai?",
"${userName} mày tuổi lồn",
"${userName} spam tiếp tao xem",
"${userName} sao non thế",
"${userName} nhục vc",
"${userName} ẳng to lên nào",
"${userName} sao ngậm cứt r",
"${userName} sủa đi con",
"${userName} sủa đéo lại à",
"${userName} con vô danh",
"${userName} sao mày gà thế",
"${userName} pam lại tao không?",
"${userName} non vc bọn nhóc",
"${userName} mày tuổi lồnn",
"${userName} sánh thế đéo nào bằng anh",
"${userName} ngu",
"${userName} đéo ăn lại à",
"${userName} sao không sủa đi em",
"${userName} em non vcl",
"${userName} gà vãi",
"${userName} em ăn c không",
"${userName} sao em nói chuyện ngu vậy",
"${userName} nhìn mặt đần thế",
"${userName} như nghiện",
"${userName} em bú đá lâu chưa",
"${userName} spam tiếp đi",
"${userName} sao câm rồi",
"${userName} spam lại anh không",
"${userName} dậy mà sủa đi nè",
"${userName} trốn rồi à",
"${userName} sao em nhập ngôn lâu v",
"${userName} nhìn em đần vãi",
"${userName} dậy mà đọ mõm nè",
"${userName} thích spam lắm mà",
"${userName} sao giờ câm thế",
"${userName} mẹ mày béo",
"${userName} bố mày gay",
"${userName} ông nội mày loạn luân với mẹ mày",
"${userName} bà ngoại mày loạn luân với bố mày",
"${userName} đẻ ra thứ ngu học",
"${userName} mồm còn hôi sữa",
"${userName} nói chuyện như thiểu năng",
"${userName} lại còn bị đần nữa",
"${userName} spam còn non lắm",
"${userName} em tuổi l",
"${userName} spam tiếp đê",
"${userName} sao chậm thế",
"${userName} sao câm thế",
"${userName} bí ngôn à",
"${userName} chắc bí ngôn nên đéo nói được rồi😂",
"${userName} ẳng ai thế em",
"${userName} sủa ngu zị",
"${userName} em nói chuyện đần vc",
"${userName} mẹ con ngu",
"${userName} rén rồi à",
"${userName} không dám ngóc dậy nữa à",
"${userName} em còn non lắm😂",
"${userName} về học lại mẫu giáo đi nhé",
"${userName} sống chật đất",
"${userName} súc vật chuyển sinh",
"${userName} sao mày spam chậm như rùa vậy",
"${userName} spam gì mà có mỗi tí tẹo thế kia",
"${userName} anh cân all nhé😂",
     ];
        let index = 0;

        const sendNextMessage = async () => {
            if (stopWar) return;
            let userName = name.replace("@", "");
            try {
                await api.sendMessage({
                    body: sendMessages[index].replace("${userName}", userName),
                    mentions,
                }, event.threadID);
            } catch (error) {
                console.error(`Lỗi khi gửi tin nhắn: ${error}`);
            }
            index = (index + 1) % sendMessages.length;
            setTimeout(sendNextMessage, 2000);
        }
        sendNextMessage();
    }

