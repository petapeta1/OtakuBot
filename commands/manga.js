const request = require("node-superfetch");
const Discord = require("discord.js");

exports.run = async (client, message, args, prefix) => {
  function shorten(text, maxLen = 2000) {
    return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
  }
  const query = args.join(" ");

  try {
    const { text } = await request
      .get("https://kitsu.io/api/edge/manga")
      .query({ "filter[text]": query });
    const body = JSON.parse(text);
    if (!body.data.length) return message.reply("Could not find any results.");
    const data = body.data[0].attributes;
    const embed = new Discord.RichEmbed()
      .setColor(0xf75239)
      .setColor(0xf75239)
      .setAuthor(
        "Kitsu.io",
        "https://i.imgur.com/216Q0HZ.png",
        "https://kitsu.io/explore/anime"
      )
      .setURL(`https://kitsu.io/anime/${data.slug}`)
      .setThumbnail(data.posterImage ? data.posterImage.original : null)
      .setTitle(data.canonicalTitle)
      .setDescription(shorten(data.synopsis))
      .addField("❯ status", ` - ${data.status}`, true)
      .addField(
        "❯ Volumes / Chapters",
        `${data.volumeCount || "???"} / ${data.chapterCount || "???"}`,
        true
      )
      .addField(
        "❯ Start Date",
        data.startDate ? new Date(data.startDate).toDateString() : "???",
        true
      )
      .addField(
        "❯ End Date",
        data.endDate ? new Date(data.endDate).toDateString() : "???",
        true
      );
    return message.channel.send(embed);
  } catch (err) {
    return message.reply(
      `Oh no, an error occurred: \`${err.message}\`. Try again later!`
    );
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-manga",
  description: "Provides info about a particular manga",
  usage: "manga [manga]"
};
