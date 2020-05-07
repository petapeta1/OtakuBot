const Discord = require("discord.js");
exports.run = (client, message) => {
  var channels = message.guild.channels
    .map(channels => `${channels.name}, `)
    .join(" ");
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("rooms:", `**[${channels}]**`);
  message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["-channels"],
  permLevel: 0
};

exports.help = {
  name: "-rooms",
  description: "Rolls a die.",
  usage: "roll"
};
