const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  const embed = new Discord.RichEmbed();
  embed
    .addField(
      "🔱| اسم الحساب :",
      `${msg.author.username}#${msg.author.discriminator}`,
      true
    )
    .addField("🆔| الاي دي :", `${msg.author.id}`, true)
    .setColor("RANDOM")
    .setFooter(msg.author.username, msg.author.avatarURL)
    .setThumbnail(`${msg.author.avatarURL}`)
    .setTimestamp()
    .setURL(`${msg.author.avatarURL}`)
    .addField(
      "📛| الحالة :",
      `${msg.author.presence.status.toUpperCase()}`,
      true
    )
    .addField(
      "🎲| بلاينج :",
      `${
        msg.author.presence.game === null
          ? "No Game"
          : msg.author.presence.game.name
      }`,
      true
    )
    .addField(
      "🏅| الرتب : ",
      `${msg.member.roles.filter(r => r.name).size}`,
      true
    )
    .addField("📅| تم الانضمام للديسكورد في :", `${msg.createdAt}`, true)
    .addField(
      "🤖| هل هو بوت ؟",
      `${msg.author.bot.toString().toUpperCase()}`,
      true
    );
  msg.channel.send({ embed: embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-id",
  description: "Sends a random cat",
  usage: "cat"
};
