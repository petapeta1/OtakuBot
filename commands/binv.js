exports.run = (client, msg, args) => {
  if (msg.channel.type === "dm") return;
  const user = msg.mentions.users.first();
  if (!user) return msg.channel.send("``" + "**قم بتحديد بوت**" + "``");
  if (!user.bot) return msg.reply("`منشن بوت`");
  msg.channel.send(
    `**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-binv",
  description: "للحصوب عبى انفيت من اي بوت",
  usage: "-binv [mention bot]"
};
