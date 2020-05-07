const Discord = require("discord.js");
exports.run = (client, msg, args) => {
  msg.channel.send(
    `**${msg.author.username}**,**${Math.floor(Math.random() * 100) + 0}**!`
  );
  let user = msg.mentions.users.first();
  let user2 = msg.guild.members.get(args[1]);
  const muteembed = new Discord.RichEmbed()
    .setColor(0xea277d)
    .setTitle(":heart: Love Calculator :heart:")
    .setDescription(
      `Love between  ${user.username} and  is at ${user2.username}`,
      ` ${Math.floor(Math.random() * 100) + 0}/100`
    );
  msg.channel.send({ embed: muteembed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-love",
  description: "Rolls a die.",
  usage: "love"
};
