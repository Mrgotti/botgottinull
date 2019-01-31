const Discord = require("discord.js");

exports.run = (client,message) => {
    let clientIcon = client.user.displayAvatarURL; {}
    const embed = new Discord.RichEmbed()
    .setThumbnail("http://web-fabrique.fr/public/images/list-icons/ecrou.png")
    .setTitle ("`Changelog version 1.5.0`")
    .setDescription("``Ici vous pourrez voir l'avancer de mon developpement.``")
    .addField("\u2022 commande mute bug , bug role + ajout duré plus simplifier", "OK :ok_hand:")
    .addField("\u2022 Bibliothèque pour le quizz", "prochainement... ")
    .addField("\u2022 Evolutions de la commande report", "En cours... OK :ok_hand: ")
    .addField ("\u2022 commande Dire créer", "OK :ok_hand:")
    .addField ("\u2022 commande kick evoluer en kick par id", "OK :ok_hand:")
    .addField ("\u2022 commande ban evoluer en ban par id", "OK :ok_hand:")
    .addField ("\u2022 commande clear ", "OK :ok_hand:")
    .addField ("\u2022 Embed ping final ", "OK :ok_hand:")
    .addField ("\u2022 commande Report ", "OK :ok_hand:")
    .addField ("\u2022 migrations hébergement bot ", "OK :ok_hand:")
    .addField ("\u2022 commande infoserv ", "OK :ok_hand:")
    .addField ("\u2022 commande mute + creation sur tout les serveurs du roles muted automatiquement ", "OK :ok_hand:")
    .addField ("\u2022 commande whois (informations utilisateur) ", "OK :ok_hand:")
    .addField ("\u2022 commande sondage  ", "OK :ok_hand:")
    .addField ("\u2022 Refonte du code pour plus de simplicité et de fonctionalitées passage a la versions 2.0.0 ", ":hammer_pick:  en cours...")
    .addField ("\u2022 ajout d'une base de donné pour stocké les informations ", ":hammer_pick:  en cours...")
    .addField ("\u2022 Créations du changelog pour la 2.0.0 ", ":hammer_pick:  en cours...")
    


    .setColor('RANDOM');
   
        
        




    message.channel.send(embed);

}
