module.exports.config = {
    name: "joinnoti",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Vtuan",
    description: "Bật tắt thông báo khi có thành viên vào nhóm",
    commandCategory: "Quản Trị Viên",
    usages: "joinnoti on/off",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args, Threads }) => {
    const threadID = event.threadID;
    let data = (await Threads.getData(threadID)).data || {};
    const option = args[0];

    if (option == "on") {
        data.joinNoti = true;
    } else if (option == "off") {
        data.joinNoti = false;
    } else {
        return api.sendMessage("Vui lòng chọn on hoặc off", threadID);
    }

    await Threads.setData(threadID, { data });
    global.data.threadData.set(parseInt(threadID), data);

    return api.sendMessage(`Đã ${data.joinNoti ? "bật" : "tắt"} thông báo khi có thành viên vào nhóm.`, threadID);
}