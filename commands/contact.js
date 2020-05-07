const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.channel.guild) return;
  client.users
    .get("585444548956913677")
    .send(
      "\n" +
        "**" +
        "● السيرفر :" +
        "**" +
        "\n" +
        "**" +
        "» " +
        message.guild.name +
        "**" +
        "\n" +
        "**" +
        " ● المرسل : " +
        "**" +
        "\n" +
        "**" +
        "» " +
        message.author.tag +
        "**" +
        "\n" +
        "**" +
        " ● الرسالة : " +
        "**" +
        "\n" +
        "**" +
        args +
        "**"
    );

  let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription("📬 تم ارسال الرسالة الى صاحب البوت بنجاح")
    .setThumbnail(message.author.avatarURL)
    .setFooter("ScriptBot | System");

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-contact",
  description: "Sends a random cat",
  usage: "cat"
};
