const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  var IzRo = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTitle("🌍| Members info")
    .addBlankField(true)
    .addField("Mmeber Count", `${message.guild.memberCount}`);
  message.channel.send(IzRo);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-count",
  description: "create category",
  usage: "-category name"
};
