const Discord = require("discord.js");
exports.run = async(client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.find(role => role.name === "Mods");
    if(!modRole) {
        message.channel.send("l'utilisateur nexiste pas ou non reconnue");
    } else {
        if(message.member.roles.has(modRole.id)) {
            if(message.mentions.members.size>0) {
                if(message.guild.me.hasPermission("KICK_MEMBERS")) {
                    let kickMember= message.mentions.members.first();
                    let haskick= await kickMember.kick(reason.join(" "));
                    message.channel.send(`${haskick.user.username} (id : ${haskick.user.id}) a été kicker avec succès. Il nous enmerdera moins celui la!.`);
                } else {
                    message.channel.send("");
                }
            } else {
                message.channel.send("Mentionne l'utilisateur pour le kick!");
            }
        } else {
            message.channel.send("Hey oh ?!!! Tu n'a pas les droits de faire cela!");
        }
    }
};