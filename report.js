const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("l'utilisateur n'existe pas ou non reconnue.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Utilisateur reporter", `${rUser} avec l'ID: ${rUser.id}`)
    .addField("Reporter par", `${message.author} avec l'ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("temps", message.createdAt)
    .addField("raisons", rreason);

    let reportschannel = message.guild.channels.find(`name`, "logs");
    if(!reportschannel) return message.channel.send("je ne trouve pas le salon logs, creer le... ");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}