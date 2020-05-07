const Discord = require("discord.js");
0;
const superagent = require("superagent");

exports.run = async (client, message, args, level) => {
  if (!message.channel.nsfw)
    return message.channel.send(
      "You can use this commands in NSFW Channel only!"
    );
  const {body} = await superagent
    .get ('https://random.dog/woof.json');
    const lewdembed = new Discord.RichEmbed()
      .setTitle(`NO HENTAI`)
      .setImage(body.url)
      .setColor(`RANDOM`);
    message.channel.send(lewdembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hentai-girls"],
  permLevel: 0
};

exports.help = {
  name: "-hentai",
  description:
    "With this command you can get some hentai nudes in NSFW channels only offcourse ",
  usage: "hentai"
};
