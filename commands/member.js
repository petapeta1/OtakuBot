const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed().setDescription(`**member status🔋
:green_circle: online   ${
    message.guild.members.filter(m => m.presence.status == "online").size
  }
:no_entry:  DnD       ${
    message.guild.members.filter(m => m.presence.status == "dnd").size
  }
 :crescent_moon: idle      ${
   message.guild.members.filter(m => m.presence.status == "idle").size
 }   
:new_moon_with_face: ofline   ${
    message.guild.members.filter(m => m.presence.status == "offline").size
  } 
:blue_heart:   all  ${message.guild.memberCount}**`);
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-member",
  description: "Provides info about a particular manga",
  usage: "manga [manga]"
};
