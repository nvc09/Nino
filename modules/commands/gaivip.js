module.exports.config = {
  name: "ff",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "vthien",
  description: "Random video free fire",
  commandCategory: "Random-mp4",
  usages: "Ff",
  cooldowns: 10,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("gai")==0 || (event.body.indexOf("vip")==0) || event.body.indexOf("gaivip")==0 ||
event.body.indexOf("yeu")==0 ||
event.body.indexOf("girl")==0 ||
event.body.indexOf("xinh")==0 ||
event.body.indexOf("be")==0 ||
event.body.indexOf("gaixinh")==0 ||
event.body.indexOf("gaiditbu")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
        "https://i.imgur.com/YT4fiIv.mp4",
        "https://i.imgur.com/ieNbUuN.mp4",
        "https://i.imgur.com/sW9I9WX.mp4",
        "https://i.imgur.com/1aXmTrO.mp4",
        "https://i.imgur.com/vpvhZtQ.mp4",
        "https://i.imgur.com/dzT43pY.mp4",
        "https://i.imgur.com/bGbFGzr.mp4",
        "https://i.imgur.com/Io30eVo.mp4",
        "https://i.imgur.com/XCC2HCy.mp4",
        "https://i.imgur.com/LlRje2D.mp4",
        "https://i.imgur.com/YV2Wzoq.mp4",
        "https://i.imgur.com/y2c4SJf.mp4",
        "https://i.imgur.com/mWd1ZxA.mp4",
        "https://i.imgur.com/nTSrod9.mp4",
        "https://i.imgur.com/Vy4Esss.mp4",
        "https://i.imgur.com/GXo6zmf.mp4",
        "https://i.imgur.com/8OhiCiW.mp4",
        "https://i.imgur.com/Dnou58v.mp4",
        "https://i.imgur.com/dcBSemx.mp4",
        "https://i.imgur.com/xJUrqOK.mp4",
        "https://i.imgur.com/LtP2aCo.mp4",
        "https://i.imgur.com/CoHsfGq.mp4",
        "https://i.imgur.com/BNfXX5q.mp4",
        "https://i.imgur.com/qYQPkvP.mp4",
        "https://i.imgur.com/6NgvPF3.mp4",
        "https://i.imgur.com/ca2yBhv.mp4",
        "https://i.imgur.com/H8Bau50.mp4",
        "https://i.imgur.com/SdUsR7W.mp4",
        "https://i.imgur.com/wSmgclj.mp4",
        "https://i.imgur.com/L5uNi3l.mp4",
        "https://i.imgur.com/9nbup0Y.mp4",
        "https://i.imgur.com/cBQvhYJ.mp4",
        "https://i.imgur.com/9y5N7Ef.mp4",
        "https://i.imgur.com/PtpRVOa.mp4",
        "https://i.imgur.com/tTfCC3n.mp4",
        "https://i.imgur.com/aRrtkHd.mp4",
        "https://i.imgur.com/Q2pWzAi.mp4",
        "https://i.imgur.com/1NCnpfS.mp4",
        "https://i.imgur.com/z8nn0r3.mp4",
        "https://i.imgur.com/tf59GxV.mp4",
        "https://i.imgur.com/AxoNEhW.mp4",
        "https://i.imgur.com/Ia9Yx2U.mp4",
        "https://i.imgur.com/sbRLn2k.mp4",
        "https://i.imgur.com/msrG9Hg.mp4",
        "https://i.imgur.com/vkNBKnb.mp4",
        "https://i.imgur.com/Cp4wbP9.mp4",
        "https://i.imgur.com/P2GbX7o.mp4",
        "https://i.imgur.com/4bR7QR0.mp4",
        "https://i.imgur.com/cDLGu7K.mp4",
        "https://i.imgur.com/409GY0m.mp4",
        "https://i.imgur.com/6vwvqIn.mp4",
        "https://i.imgur.com/cZYdGaY.mp4",
        "https://i.imgur.com/jRL4bMo.mp4",
        "https://i.imgur.com/Pv3ukt8.mp4",
        "https://i.imgur.com/V48iXIg.mp4",
        "https://i.imgur.com/hd73w9F.mp4",
        "https://i.imgur.com/4E2TwSI.mp4",
        "https://i.imgur.com/rE8LNgI.mp4",
        "https://i.imgur.com/Nmi43Xq.mp4",
        "https://i.imgur.com/62D82Ac.mp4",
        "https://i.imgur.com/qizOjrb.mp4",
        "https://i.imgur.com/JeQzFk6.mp4",
        "https://i.imgur.com/GO038XI.mp4",
        "https://i.imgur.com/tWypNCc.mp4",
        "https://i.imgur.com/1wuNUeu.mp4",
        "https://i.imgur.com/yzYnvIn.mp4",
        "https://i.imgur.com/uaCOgF2.mp4",
        "https://i.imgur.com/CIOKrko.mp4",
        "https://i.imgur.com/8Phezwv.mp4",
        "https://i.imgur.com/wf5bMoT.mp4",
        "https://i.imgur.com/BFwI2z3.mp4",
        "https://i.imgur.com/hnpydp3.mp4",
        "https://i.imgur.com/XZyfCc4.mp4",
        "https://i.imgur.com/IoObe5h.mp4",
        "https://i.imgur.com/IZkVoBQ.mp4",
        "https://i.imgur.com/lUK6nz7.mp4",
        "https://i.imgur.com/X6NX5bn.mp4",
        "https://i.imgur.com/feShXAm.mp4",
        "https://i.imgur.com/HrUx4rv.mp4",
        "https://i.imgur.com/4yO0W3J.mp4",
        "https://i.imgur.com/PQpcEtL.mp4",
        "https://i.imgur.com/ZTBPlUu.mp4",
        "https://i.imgur.com/2TRymKO.mp4",
        "https://i.imgur.com/E4OSY5u.mp4",
        "https://i.imgur.com/jMSfRbM.mp4",
        "https://i.imgur.com/BQRr0JA.mp4",
        "https://i.imgur.com/QpNRmrC.mp4",
        "https://i.imgur.com/jVsOqRG.mp4",
        "https://i.imgur.com/47YUWRy.mp4",
        "https://i.imgur.com/h2ULlnC.mp4",
        "https://i.imgur.com/EgP0DrC.mp4",
        "https://i.imgur.com/VrOmvb6.mp4",
        "https://i.imgur.com/tX8KdKG.mp4",
        "https://i.imgur.com/hfvxF5E.mp4",
        "https://i.imgur.com/VP8pcLd.mp4",
        "https://i.imgur.com/XoBIMtU.mp4",
        "https://i.imgur.com/XFVFhUV.mp4",
        "https://i.imgur.com/RGjNicg.mp4"
         ];
     var callback = () => api.sendMessage({body:"𝙶𝚊́𝚒 𝚇𝚒𝚗𝚑𝚑𝚑 ┃ 𝙵𝚋 𝙰𝚍𝚖𝚒𝚗:https://www.facebook.com/vanchiendzs",attachment: fs.createReadStream(__dirname + "/cache/gaivip.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gaivip.mp4"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/gaivip.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };