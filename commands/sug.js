const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  const dataSuggestion = args.join(" ");
  if (!dataSuggestion)
    return message.channel.send("**Please include text for the suggestion!**");

  const msg = await message.channel.send(
    "Sending your suggestion to Development..."
  );
  let Room = message.guild.channels.find(`name`, "suggestions");
  if (!Room)
    return message.channel
      .send("Can't find suggestions channel.")
      .then(d => d.react("❌"));
  const embed = new Discord.RichEmbed()
    .setTitle("Moonglow Suggestion")
    .setThumbnail(message.guild.iconURL)
    .addField("Author", `${message.author.username} (${message.author.id})`)
    .addField("Orgin Guild", `${message.guild.name} (${message.guild.id})`)
    .addField("Suggestion", `${dataSuggestion}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(client.user.username, client.user.avatarURL);
  Room.sendEmbed(embed).then(c => {
    c.react("✅").then(() => c.react("❌"));
    msg.edit(
      "Suggestion has been successfully sent to the Garnet Development Team!"
    );
    msg.delete(10000);
    message.delete(10000);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Standard User"
};

exports.help = {
  name: "-sug",
  category: "System",
  description: "Send a suggestion for Moonglow to the developers.",
  usage: "suggest [..suggestion]"
};
