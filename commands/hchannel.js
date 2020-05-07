const settings = require("../settings.json");
const Discord = require("discord.js");
const customisation = require("../customisation.json");
exports.run = (client, message, args) => {
  if (message.author.bot) return;
  if (!message.channel.guild)
    return message.reply("** This command only for servers**");
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.reply(" **__ليس لديك صلاحيات__**");
  message.channel
    .overwritePermissions(message.guild.id, {
      READ_MESSAGES: false
    })
    .then(() => {
      message.reply("**__تم اخفاء الشات__ ✅ **");
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["اخفاء"],
  permLevel: 0
};

exports.help = {
  name: "-hchannel",
  description: "mute member",
  usage: "mute [mention]"
};
