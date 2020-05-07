const Discord = require("discord.js");
exports.run = (client, message) => {
  if (!message.channel.guild) return;
  var msg = `${Date.now() - message.createdTimestamp}`;
  var api = `${Math.round(client.ping)}`;
  if (message.author.bot) return;
  let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#5016f3")
    .addField("**Time Taken:**", msg + " ms :signal_strength: ")
    .addField("**WebSocket:**", api + " ms :signal_strength: ")
    .setTimestamp();
  message.channel.send({ embed: embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-ping",
  description: "Ping/Pong command. I wonder what this does? /sarcasm",
  usage: "ping"
};
