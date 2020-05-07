const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()

    .setTitle(`ServerAvatar${message.guild.name} **  `)
    .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
    .setTimestamp();

  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-savatar",
  description: "Rock, Papper, Scissors.",
  usage: "rps"
};
