const moment = require("moment");
moment.locale('fr')


module.exports.run = async (client, message, args) => {



let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
let member = message.guild.member(user);
let roles = [];
if (member.roles.size > 0) {
  member.roles.forEach(r => {
    if (!r.name.includes("everyone")) {
      roles.push(r.name);
    }
  })
} else {
  roles = "no";
}
let ttt = (member.roles.size > 0) ? roles.length : "0";
let wato = (roles.length > 0) ? roles.join(", ") : "aucun";
let game = (!!user.presence && user.presence !== null && user.presence.game !== null && user.presence.game.name !== null) ? user.presence.game.name : "Ne joue pas"
let embed = {
  author: {
    name: "Informations sur: " + user.username,
    icon_url: (user.avatarURL !== null) ? user.avatarURL : "https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png"
  },
  color: 0x47D70C,
  thumbnail: {
    url: (user.avatarURL !== null) ? user.avatarURL : "https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png"
  },
  fields: [{
    name: "Utilisateur",
    value: (user.username) + "#" + (user.discriminator),
    inline: true
  }, {
    name: "ID",
    value: user.id,
    inline: true
  }, {
    name: "Surnom",
    value: (member.nickname !== null) ? member.nickname : user.username,
    inline: true
  }, {
    name: "Game",
    value: game,
    inline: true
  }, {
    name: "Status",
    value: (user.presence !== null && user.presence.status !== null) ? user.presence.status : "Hors ligne",
    inline: true
  }, {
    name: "Rejoins le serveur:",
    value: moment(member.joinedAt, "YYYYMMDD").fromNow(),
    inline: true
  }, {
    name: "A creer son compte",
    value: moment(user.createdAt, "YYYYMMDD").fromNow(),
    inline: true
  }, {
    name: "Roles (" + ttt + ")",
    value: wato,
    inline: true
  }]
}
message.channel.send("", {
  embed
});
}
module.exports.help = {
  name: "whois"
}