const moment = require("moment");
const Discord = require("discord.js");
const customisation = require("../customisation.json");
function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
}
exports.run = async (client, message, args) => {
  const membre = message.mentions.members.first() || message.member;
  let embed1 = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle(`${membre.user.username} :`)
    .setThumbnail(membre.user.avatarURL)
    .addField(
      "`Joined Discord At :`",
      `__${moment.utc(membre.user.createdAt).format("LL")}__`,
      true
    )
    .addField(
      "`Joined Server At :`",
      `__${moment.utc(membre.joinedAt).format("LL")}__`,
      true
    )
    .setFooter(
      membre.user.id,
      "https://images-ext-1.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif"
    );

  message.channel.sendEmbed(embed1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["userstats"],
  permLevel: 0
};

exports.help = {
  name: "-user",
  description: "Displays information about a user.",
  usage: "userinfo <@user>"
};
