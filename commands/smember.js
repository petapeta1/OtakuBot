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
    .createChannel(`Members : [ ${message.guild.members.size} ]`, "voice")
    .then(c => {
      console.log(`Done make room in: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        VIEW_CHANNEL: false
      });
      setInterval(() => {
        c.setName(`Members : [ ${message.guild.members.size} ]`);
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
  name: "-setmember",
  description: "Smacks a user.",
  usage: "smack <user>"
};
