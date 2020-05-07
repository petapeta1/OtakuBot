exports.run = (client, message) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  let args = message.content.split(" ").slice(1);
  message.delete();
  message.channel.send(args.join(" "));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-say",
  description: "Makes the bot repeat your message.",
  usage: "say [message]"
};
