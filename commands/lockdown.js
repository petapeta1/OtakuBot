const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  message.delete();
  const msg = await message.channel.send("Locking...");
  try {
    client.channels
      .get("697965733107335218")
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    client.channels
      .get("697965681731305534")
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    client.channels
      .get("697965681731305534")
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
  } catch (err) {
    msg.edit(err);
  }

  msg.edit("✅ ***Successfully locked the server.***");

  const embed = new Discord.RichEmbed();
  embed.setTitle("LOCKED SERVER");
  embed.addField("Locked by", message.member.user.tag, true);
  try {
    embed.addField("Reason", args.join(" "));
  } catch (err) {
    embed.addField("Reason", err, true);
  }
  embed.setColor("ORANGE");
  embed.setFooter(client.user.username, client.user.avatarURL);

  client.channels.get("703171273391472680").send(embed);
};

exports.conf = {
  enabled: true,
  aliases: []
};

exports.help = {
  name: "-lockdown",
  category: "System",
  description: "Locks down the server.",
  usage: "lockdown"
};
