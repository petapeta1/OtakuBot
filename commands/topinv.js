const Discord = require("discord.js");
const customisation = require("../customisation.json");

exports.run = async (client, message, args) => {
  message.guild.fetchInvites().then(i => {
    var invites = [];

    i.forEach(inv => {
      var [invs, i] = [{}, null];

      if (inv.maxUses) {
        invs[inv.code] = +inv.uses + "/" + inv.maxUses;
      } else {
        invs[inv.code] = +inv.uses;
      }
      invites.push(
        `invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`
      );
    });
    var embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`${invites.join(`\n`) + "\n\n**By:** " + message.author}`)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/442414506430169098/489929808244113409/JPEG_20180913_232108.jpg"
      );
    message.channel.send({ embed: embed });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-topinv",
  description: "to see the top inv",
  usage: "-topinv"
};
