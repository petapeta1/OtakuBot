const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  if (!message.channel.guild)
    return message.reply("**❌ اسف لكن هذا الامر للسيرفرات فقط **");
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("**⚠  لا يوجد لديك صلاحية لمسح الشات**");
  var msg;
  msg = parseInt();

  message.channel
    .fetchMessages({ limit: msg })
    .then(messages => message.channel.bulkDelete(messages))
    .catch(console.error);
  message.channel
    .sendMessage("", {
      embed: {
        title: "تــم مسح الشات",
        color: 0x5016f3,
        footer: {}
      }
    })
    .then(msg => {
      msg.delete(3000);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["مسح"],
  permLevel: 0
};

exports.help = {
  name: "-clear",
  description: "Sends a random cat",
  usage: "cat"
};
