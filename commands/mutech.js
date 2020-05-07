const settings = require('../settings.json');
const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, message, args) => {
  if (message.author.bot) return;
    if(!message.channel.guild) return message.reply('** This command only for servers**');
  if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
    return message.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' **__ليس لديك صلاحيات__**');
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    }).then(() => {
        message.reply("**__تم تقفيل الشات__ ✅ **")
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["غلق","-lock"],
  permLevel: 0
};

exports.help = {
  name: '-mutechannel',
  description: 'mute channel',
  usage: '-mutechannel'
};