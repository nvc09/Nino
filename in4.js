module.exports.config = {
    name: 'in4',
    version: '1.1.1',
    hasPermssion: 0,
    credits: '',
    description: 'Xem thông tin người dùng Facebook',
    commandCategory: 'Tiện ích',
    usages: '[...|tag|reply|uid|username]',
    cooldowns: 2
};
const {
    get
} = require('axios');
const {
    image
} = require('image-downloader');
const {
    createReadStream
} = require('fs-extra');
module.exports.run = async function({
    api, event, args, Threads, Currencies
}) {
    try {      
        var uqID = event.type == 'message_reply' ? event.messageReply.senderID: Object.keys(event.mentions).length != 0 ? Object.keys(event.mentions)[0]: !!args[0] && !!args[0] ? args[0]: event.senderID;
        const res = await get(`https://sumiproject.io.vn/facebook/getinfov2?uid=${uqID.data.data.uid}&apikey=APIKEY_FREE`);// api info nhá
        const {name,link_profile,uid,first_name,web,gender,relationship_status,love,birthday,follower,avatar,tichxanh,location,hometown,username,about,locale} = res.data || {};
        const dest = `${__dirname}/cache/testt.png`;
        await image({
            url: avatar, dest
        });
        api.sendMessage({
            body: `
=== 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ===
━━━━━━━━━━━━━━━━━━
→ Tên: ${first_name}
→ Tên đầy đủ: ${name}
→ Giới tính: ${gender}
→ Ngày sinh: ${birthday}
→ Đến từ: ${hometown}
→ Sống tại: ${location}
→ Vùng/miền: ${locale}
→ Mối quan hệ: ${relationship_status} ${!relationship_status|| !love ? '': `với ${love}`}
→ Trang Web: ${web}
→ Tích xanh: ${tichxanh}
→ Mã ID: ${uid}
→ Tên ID: ${username}
→ Liên kết TCN: ${link_profile}
→ Có ${localeNum(follower)} người theo dõi
→ Giới thiệu: ${about}
==========================
→ Tổng tin nhắn: ${localeNum(ciesData.exp)} tin
→ Money trên bot: ${localeNum(ciesData.money)}$
→ Chức vụ trong nhóm: ${permission}
→ Kiểm tra cấm: ${ban} dùng bot
`.replace(/null|undefined/g, 'Không có dữ liệu!').replace(/false/g, 'Không có').replace(/true/g, 'Có tích'), attachment: createReadStream(dest)
        }, event.threadID, event.messageID);
    }catch(e) {
        api.sendMessage(`${e}`, event.threadID, event.messageID);
       console.log(e)
    };
};
function localeNum(a){
    return (a.toLocaleString()).replace(/\,/g, '.');
};