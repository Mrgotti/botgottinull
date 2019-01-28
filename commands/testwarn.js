const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Quoi tu veux que je warn un dieu? Tu peut allez te faire foutre!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("l'utilisateur n'éxiste pas ou non reconnue");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("test");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("U", `<@${wUser.id}>`)
  .addField("Reporter par", message.channel)
  .addField("Nombres de reports", warns[wUser.id].warns)
  .addField("raisons", reason);

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("Je ne trouve pas le salon logs! Créer le pour utilisé cette commande!");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("Je ne trouve pas le roles muted, creer le pour m'utiliser.");

    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> est temporairement muter!(2 reports)`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> n est plus muter.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> est banni! (3 reports)`)
  }

}

module.exports.help = {
  name: "warn"
}