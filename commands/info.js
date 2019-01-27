const Discord = require("discord.js");

exports.run = (client,message) => {
    let clientIcon = client.user.displayAvatarURL; {}
    const embed = new Discord.RichEmbed()
    .setThumbnail(clientIcon) 
    .setDescription("Voici quelques informations sur moi-même et mon créateur.") 
    .addField(":tools: Mon créateur est `MrGotti#3193`","Je le remercie de m'avoir créer! :wink:")
    .addField("🗯️Dans " + client.channels.size + " serveurs avec " + client.users.size + " utilisateurs par jours :boy:","Version 1.0.0")
    .setColor('#FF0000')
    .setFooter("© 2019 - bot par MrGotti");
        
        




    message.channel.send(embed);
    

}