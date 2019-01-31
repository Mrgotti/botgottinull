const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const modRole = message.guild.roles.find(role => role.name === "Mods");
    if (!modRole)
      return console.log("Le role Mods n'hésite pas!");
  
    if (!message.member.roles.has(modRole.id))
      return message.reply("Hey oh ?!!! Tu n'a pas les droits de faire cela!");


    if (!args[0]) return message.channel.send('Syntaxe: <prefix>sondage questions')

    let sondageEmbed = new Discord.RichEmbed()
    .setTitle(`Sondage crée par ${message.author.username}`)
    .setColor('RANDOM')
    .setFooter('Appuyez sur les réactions ci-dessous.')
    .setDescription(args.join(' '))

    let msg = await message.channel.send(sondageEmbed);
    await msg.react('✅')
    await msg.react('❌')

    
};

module.exports.help = {
  name: "sondage"
}