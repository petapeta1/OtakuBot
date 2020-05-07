const moment = require("moment");
const Discord = require("discord.js");
const customisation = require("../customisation.json");
exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  var args = message.content.split(" ");
  var command = args[0];
  var namecat = args[1];
  if (!message.channel.guild) return message.channel.send("Only For Servers");
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send("** You dont have Permissions.**");
  if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
    return message.channel.send("** I dont have Permissions.**");
  if (!namecat) {
    message.channel.send("**لم تقم بإدخال اسم الكاتوجري**");
  } else {
    message.guild.createChannel(namecat, {
      type: "category"
    });
    message.channel.send("**تم انشاء كاتوجري بإسم **: " + namecat);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-category",
  description: "create category",
  usage: "-category name"
};
