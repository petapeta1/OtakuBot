const Discord = require("discord.js");
const superagent = require("superagent");
const customisation = require("../customisation.json");

exports.run = async (client, message, args, tools) => {
  if (!message.channel.guild)
    return message.reply("** This command only for servers **");
  var currentTime = new Date(),
    Year = currentTime.getFullYear(),
    Month = currentTime.getMonth() + 1,
    Day = currentTime.getDate();

  var Date15 = new Discord.RichEmbed()
    .setTitle("**!-Date-! **")
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription("" + Day + "-" + Month + "-" + Year + "");
  message.channel.sendEmbed(Date15);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-date",
  description: "Feeds someone OwO",
  usage: "feed"
};
