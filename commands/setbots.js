const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
    return message.reply("❌ **لا تمتلك صلاحيه**");
  if (
    !message.guild
      .member(client.user)
      .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
  )
    return message.reply("❌ **لا امتلك صلاحيه**");
  message.channel.send("✅| **تم عمل الروم بنجاح**");
  message.guild
    .createChannel(
      `Bots : : [ ${message.guild.members.filter(m => m.user.bot).size} ]`,
      "voice"
    )
    .then(c => {
      console.log(`Done make room in: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        VIEW_CHANNEL: false,
        SPEAK: false
      });
      setInterval(() => {
        c.setName(
          `Bots : [ ${message.guild.members.filter(m => m.user.bot).size} ]`
        );
      }, 1000);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-setbot",
  description: "Displays information about the server.",
  usage: "serverinfo"
};
