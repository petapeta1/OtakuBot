const Discord = require("discord.js");

exports.run = async (client, message, args) => {

           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    
    if (!message.guild.roles.find("name", `${args}`))
      return message.channel.sendEmbed(embedd);

  var a = message.guild.roles.find("name", `${args}`);
  if (!a) return;
  const embed = new Discord.RichEmbed()

    .setFooter(
      "Requested by " + message.author.username,
      message.author.avatarURL
    )
    .setDescription(`**Color Changed To Successfully** :white_check_mark: `)

    .setColor(`${a.hexColor}`);
  message.channel.sendEmbed(embed);
  if (!args) return;
  setInterval(function() {});
  let count = 0;
  let ecount = 0;
  for (let x = 1; x < 201; x++) {
    message.member.removeRole(message.guild.roles.find("name", `${x}`));
  }
  message.member.addRole(message.guild.roles.find("name", `${args}`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-color",
  description: "Sends a random cat",
  usage: "cat"
};
