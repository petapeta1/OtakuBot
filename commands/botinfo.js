const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.channel.send({
    embed: new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setColor("RANDOM")
      .setTitle("Info WESO.Bot.")
      .addField(
        "``My Ping``",
        [`${Date.now() - message.createdTimestamp}` + "MS"],
        true
      )
      .addField(
        "``RAM Usage``",
        `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`,
        true
      )
      .addField("``servers``", [client.guilds.size], true)
      .addField("``channels``", `[ ${client.channels.size} ]`, true)
      .addField("``Users``", `[ ${client.users.size} ]`, true)
      .addField("``My Name``", `[ ${client.user.tag} ]`, true)
      .addField("``My ID``", `[ ${client.user.id} ]`, true)
      .addField("``My Prefix``", `[ - ]`, true)
      .addField("``My Language``", `[ Java Script ]`, true)
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-botinfo",
  description: "معلومات البوت.",
  usage: "botinfo "
};
