const axios = require("axios");
const settings = require("../settings.json");
exports.run = async (client, message, args) => {
  if (message.author.bot) return;
    if(!message.channel.guild) return message.reply('** This command only for servers**');
  if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
    return message.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
  const msg = await message.channel.send("Changing slowmode...");
  function slowmode(s, m) {
    axios({
      method: "patch",
      url: `https://discordapp.com/api/v6/channels/${message.channel.id}`,
      headers: {
        Authorization: `Bot ${settings.token}`
      },
      data: {
        rate_limit_per_user: s,
        reason: args.slice(1).join(" ")
      }
    })
      .then(msg.edit(m))
      .catch(() => {
        msg.edit(
          "An error has occurred, either I do not have permissions or the ID is undefined."
        );
      });
  }

  if (args[0] === "off") {
    message.delete();
    slowmode(0, "***Slowmode has been disabled in this channel.***");
    msg.delete(8000);
  } else if (
    isNaN(args[0]) ||
    parseInt(args[0]) > 120 ||
    parseInt(args[0]) < 1
  ) {
    msg.edit("**Error:** Please use a number between 1 and 120");
  } else {
    message.delete();
    slowmode(
      args[0],
      `***Slowmode is enabled in this channel for ${args[0]} seconds.***`
    );
    msg.delete(8000);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Server Moderator"
};

exports.help = {
  name: "-slowmode",
  category: "Moderation",
  description: "Prevents users from sending messages too fast.",
  usage: "Slowmode [...# of secs]"
};
