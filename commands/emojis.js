const Discord = require("discord.js");

exports.run = async (client, message, args, tools) => {
  const List = message.guild.emojis.map(e => e.toString()).join(" ");

  const EmojiList = new Discord.RichEmbed()
    .setTitle("➠ Emojis")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(List)
    .setFooter(message.guild.name);
  message.channel.send(EmojiList);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-emojis",
  description: "Feeds someone OwO",
  usage: "feed"
};
