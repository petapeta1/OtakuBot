const Discord = require("discord.js");
exports.run = async (client, msg) => {
  let args = msg.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (!args) return msg.channel.send("`الرجاء كتابة عدد اللوان المرجى صنعها`");
  if (!msg.member.hasPermission("MANAGE_ROLES")) return;
  msg.channel.send(`** Done Colors Was Successful Created ${args}**`);
  setInterval(function() {});
  let count = 0;
  let ecount = 0;
  for (let x = 1; x < `${parseInt(args) + 1}`; x++) {
    msg.guild.createRole({ name: x, color: "RANDOM" });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-crcolors",
  description: "create category",
  usage: "-category name"
};
