module.exports = (api) => {
  const axios = require('axios')
  async function getBio(uid) {
      if (!uid) return "Vui long nhap UID can lay tieu su";
      const form = {
          av: api.getCurrentUserID(),
          fb_api_req_friendly_name: "ProfileCometBioTextEditorPrivacyIconQuery",
          fb_api_caller_class: "RelayModern",
          doc_id: "5009284572488938",
          variables: JSON.stringify({
              "id": uid
          })
      };
      var src = await api.httpPost('https://www.facebook.com/api/graphql/', form)
      var bio = (JSON.parse(src)).data.user.profile_intro_card
      return bio.bio ? bio.bio.text : "Không có";
  }
  async function getUserInfo(uid, family) {
      var resolveFunc = function () {};
      var rejectFunc = function () {};
      var returnPromise = new Promise(function (resolve, reject) {
          resolveFunc = resolve;
          rejectFunc = reject;
      });
      var bio = await getBio(uid);
      var family = await getFamily(uid);
      var countFriends = await getCountFriends(uid)
      try {
          api.httpGet(`https://graph.facebook.com/${uid}?fields=name,email,about,gender,cover,hometown,link,location,quotes,relationship_status,significant_other,username,subscribers.limite(0),website,education,work,birthday&access_token=${global.token}`, (e, i) => {
              if(i == undefined) return resolveFunc(false)
              var t = JSON.parse(i);
              var form = {
                name: t.name,
                gender: t.gender,
                link: t.link,
                id: t.id,
                birthday: t.birthday ? t.birthday : 'Không có',
                about: t.about ? t.about : 'Không có',
                hometown: t.hometown ? t.hometown.name : 'Không có',
                location: t.location ? t.location.name : 'Không có',
                quotes: t.quotes ? t.quotes : 'Không có',
                username: t.username ? t.username : 'Không có',
                love: {
                  status: t.relationship_status ? (t.significant_other ? "Đang " + t.relationship_status.toLowerCase() + " với" + " " + t.significant_other.name : t.relationship_status) : "Độc thân",
                  id: t.significant_other ? t.significant_other.id : 'Không có'
                },
                follow: t.subscribers ? t.subscribers.summary.total_count : 0,
                education: t.education ? (t.education.map(i => {
                  var name = i.concentration ? i.concentration[0].name : "";
                  var school = i.school ? i.school.name : "";
                  return school != "" ? (name ? `Học ${name} tại ${school}\n` : "Học tại " + school): 'Không có'
                })) : 'Không có',
                work: t.work ? (t.work.map(i => {
                  var name = i.employer ? i.employer.name : "";
                  var position = i.position ? i.position.name : "";
                  return name != "" ? (position ? `${position} tại ${name}\n` : "Làm việc tại " + name): 'Không có'
                })) : 'Không có',
                bio: bio ? bio : 'Không có',
                website: t.website ? t.website : 'Không có',
                family: (family.length == 0 || family == "Không có") ? "Không có" : family,
                countFriends: countFriends,
                cover: t.cover ? t.cover.source : "Không có",
                avatar: 'https://graph.facebook.com/'+ t.id + '/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662'
              }
              return resolveFunc(form)
          });
      } catch (error) {
          return resolveFunc(false)
      }
      return returnPromise
  }

async function getFamily(uid) {
      var { data } = await axios('https://mbasic.facebook.com/' + uid + '/about', {
          headers: {
              cookie: global.cookie
          }
      })
      try {
        const family = data.match(/<div id="family">(.*?)<div id/);
        const dataA = family[0].split('paipv=0">')
        var dataReturn = [];
        for (let i = 1; i < 20; i++) {
            if (dataA[i] == undefined) continue
            var name = dataA[i].split('</a>')[0]
            var role = dataA[i].split('</a>')[1].split(/<h3 class="(.*?)>/)[2].split('</h3>')[0];
            dataReturn.push({
                name,
                role
            })
        }
        return dataReturn
      }
      catch(e) {
        return 'Không có'
      }
  }
  async function getCountFriends(uid) {
    var { data } = await axios('https://mbasic.facebook.com/' + uid + '/friends', {
            headers: {
                cookie: global.cookie
            }
        })
    var count = data.split('>Bạn bè (')[1] != undefined ? data.split('>Bạn bè (')[1].split(')</h3>')[0] : "Không có"
    return count
  }
  return getUserInfo
}