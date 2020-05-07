const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.channel.guild) return;
  if (!message.member.hasPermission("MANAGE_CHANNEL")) return;
  var a = message.content
    .split(" ")
    .slice(1)
    .join("  ");
  if (!a) return message.reply("اكتب كلام لوضعه في التوبيك!");
  message.channel
    .setTopic(`${a}`)
    .then(newChannel => message.channel.send(`تم تغيير التوبيك لـ **${a}**`))
    .catch(console.error);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-tc",
  description: "",
  usage: "-bc "
};
