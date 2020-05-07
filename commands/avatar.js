const Discord = require("discord.js");
const customisation = require("../customisation.json");
exports.run = (client, message, args) => {
  let avatar = message.mentions.users.size
    ? message.mentions.users.first().avatarURL
    : message.author.avatarURL;
  if (message.mentions.users.size > 0) {
    const embed = new Discord.RichEmbed()
      .setColor(0xffff00)
      .setTitle(`this avatar for ${message.mentions.users.first().username}:`)
      .setImage(`${avatar + "?size=1024"}`)
      .setFooter(`© ${customisation.ownername}`);
    message.channel.send({ embed });
  } else {
    const embed = new Discord.RichEmbed()
      .setColor(0xffff00)
      .setTitle(`this avatar for ${message.author.username}:`)
      .setImage(`${avatar + "?size=1024"}`)
      .setFooter(`© ${customisation.ownername}`);
    message.channel.send({ embed });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-avatar",
  description: "Fetches a user's avatar.",
  usage: "avatar <user>"
};
