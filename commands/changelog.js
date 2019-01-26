const Discord = require("discord.js");

exports.run = (client,message) => {
    let clientIcon = client.user.displayAvatarURL; {}
    const embed = new Discord.RichEmbed()
    .setThumbnail("http://web-fabrique.fr/public/images/list-icons/ecrou.png")
    .setTitle ("`Changelog version 0.3.0`")
    .setDescription("``Ici vous pourrez voir l'avancer de mon developpement.``")
    .addField("\u2022commande mute bug , bug role + ajout duré plus simplifier", "OK :ok_hand:")
    .addField("\u2022 Bibliothèque pour le quizz", "En cours... :chart_with_upwards_trend: ")
    .addField("\u2022 Bot musique", "En cours... :chart_with_upwards_trend: ")
    .addField ("\u2022 commande Dire créer", "OK :ok_hand:")
    .addField ("\u2022 commande kick evoluer en kick par id", "OK :ok_hand:")
    .addField ("\u2022 commande ban evoluer en kick par id", "OK :ok_hand:")
    .addField ("\u2022 commande clear ", "OK :ok_hand:")
    .addField ("\u2022 Embed ping final ", "OK :ok_hand:")
    .addField ("\u2022 commande Report ", "OK :ok_hand:")
    .addField ("\u2022 migrations hébergement bot ", "OK :ok_hand:")
    
    

    .setColor('RANDOM');
   
        
        




    message.channel.send(embed);

}