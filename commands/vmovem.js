
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``Use : " +-+ "move @User``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`✅ You Have Moved <@${usermentioned}> To Your Channel`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `The User Should Be In channel To Move It`")
}
} else {
 message.channel.send("**``You Should Be In Room Voice To Move SomeOne``**")
}
} else {
message.react("❌")
}
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["userstats"],
  permLevel: 0
};

exports.help = {
  name: '-move',
  description: '',
  usage: '-move <@user>'
};
