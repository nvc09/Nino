const os = require('os');
const moment = require('moment-timezone');
const fs = require('fs').promises;

module.exports.config = {
  name: "uptime",
  version: "2.0.0",
  hasPermission: 0,
  credits: "Vtuan",
  description: "Hiển thị thông tin hệ thống của bot",
  commandCategory: "Hệ thống",
  usages: "",
  cooldowns: 5
};

async function getDependencyCount() {
  try {
    const packageJsonString = await fs.readFile('package.json', 'utf8');
    const packageJson = JSON.parse(packageJsonString);
    const depCount = Object.keys(packageJson.dependencies || {}).length;
    const devDepCount = Object.keys(packageJson.devDependencies || {}).length;
    return { depCount, devDepCount };
  } catch (error) {
    console.error('Không thể đọc file package.json:', error);
    return { depCount: -1, devDepCount: -1 };
  }
}

function getStatusByPing(ping) {
  if (ping < 200) {
    return 'tốt';
  } else if (ping < 800) {
    return 'bình thường';
  } else {
    return 'xấu';
  }
}
function getPrimaryIP() {
  const interfaces = os.networkInterfaces();
  for (let iface of Object.values(interfaces)) {
    for (let alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return '127.0.0.1'; 
}

module.exports.run = async ({ api, event, Threads ,Users }) => {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    const uptime = process.uptime();
    const { depCount, devDepCount } = await getDependencyCount();
    let name = await Users.getNameUser(event.senderID);
    const primaryIp = getPrimaryIP();
    const botStatus = getStatusByPing(Date.now() - event.timestamp);

    const uptimeHours = Math.floor(uptime / (60 * 60));
    const uptimeMinutes = Math.floor((uptime % (60 * 60)) / 60);
    const uptimeSeconds = Math.floor(uptime % 60);

    const uptimeString = `${uptimeHours.toString().padStart(2, '0')}:${uptimeMinutes.toString().padStart(2, '0')}:${uptimeSeconds.toString().padStart(2, '0')}`;
    const replyMsg = `
『 𝚄𝙿𝚃𝙸𝙼𝙴 𝚁𝙾𝙱𝙾𝚃 』
▱▱▱▱▱▱▱▱▱▱▱▱▱
|‣ Time onl: ${uptimeString}
————————————————
|‣ Tổng số package sống: ${depCount}
|‣ Tống số package chết: ${devDepCount}
————————————————
|‣ Tình trạng: ${botStatus}
————————————————
|‣ Ping: ${Date.now() - event.timestamp}ms
————————————————
|‣ RAM: ${(usedMemory / 1024 / 1024 / 1024).toFixed(2)}GB/${(totalMemory / 1024 / 1024 / 1024).toFixed(2)}GB
|‣ CPU: ${os.cpus().length} core(s) - ${os.cpus()[0].model.trim()} @ ${os.cpus()[0].speed}MHz
|‣ Hệ điều hành: ${os.type()} ${os.release()} (${os.arch()})
————————————————
• Yêu cầu bởi: ${name}
▱▱▱▱▱▱▱▱▱▱▱▱▱
• ${moment().tz('Asia/Ho_Chi_Minh').format('HH:mm:ss')} || ${moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY')}`.trim();
    api.sendMessage(replyMsg, event.threadID, event.messageID);

}