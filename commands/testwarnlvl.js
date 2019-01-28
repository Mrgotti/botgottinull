const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Quoi tu veux que je warn un dieu? Tu peut allez te faire foutre!");
  
  if(!wUser) return message.reply("l'utilisateur n'existe pas ou non reconnue");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> a ${warnlevel} reports.`);

}

module.exports.help = {
  name: "warnlevel"
}