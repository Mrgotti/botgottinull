const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

  //!tempmute @user 1s/m/h/d
  const modRole = message.guild.roles.find(role => role.name === "Mods");
  if (!modRole)
    return console.log("Le role Mods n'hésite pas!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("l'utilisateur n'éxiste pas ou non reconnue...");
  if(tomute.roles.has(modRole)) return message.reply("Je ne peut pas mute un dieu!");
  let muterole = message.guild.roles.find(`name`, "muted");
  
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  
  let mutetime = args[1];
  if(!mutetime) return message.reply("tu n'as pas spécifié la duré du mute !");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> est mute pour ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> n'est plus muté!`);
  }, ms(mutetime));



}

module.exports.help = {
  name: "tempmute"
}