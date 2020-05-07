exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_SERVER"))
    return message.channel.send("**:x: You Dont Have Perms `MANAGE_SERVER`**");
  if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
    return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
  if (message.member.voiceChannel == null)
    return message.channel.send(`**You Have To Be In Room Voice**`);
  var author = message.member.voiceChannelID;
  var m = message.guild.members.filter(m => m.voiceChannel);
  message.guild.members
    .filter(m => m.voiceChannel)
    .forEach(m => {
      m.setVoiceChannel(author);
    });
  message.channel.send(
    `**:white_check_mark: Success Moved All To Your Channel**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["-mvall"],
  permLevel: 0
};

exports.help = {
  name: "-moveall",
  description: "mute member",
  usage: "mute [mention]"
};
