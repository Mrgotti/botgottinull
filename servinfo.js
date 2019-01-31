const Discord = require("discord.js");
const moment = require("moment");
moment.locale('fr');

module.exports.run = async (client, message, args) => {
    let clientIcon = client.user.displayAvatarURL; {}
    let serverembed = new Discord.RichEmbed()
    .setDescription("Informations du serveur")
    .setColor("#FF0000")
    .setThumbnail(clientIcon)
    .addField("Nom du serveur", message.guild.name, true)
    .addField("créer le", moment(message.guild.createdAt, "YYYYMMDD").fromNow(), true)
    .addField("Tu as rejoins le", moment(message.member.joinedAt, "YYYYMMDD").fromNow(), true)
    .addField("Nombres de membres", message.guild.memberCount, true)
    .setFooter("© 2019 - bot par MrGotti");

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}