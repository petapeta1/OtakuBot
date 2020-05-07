const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.channel.guild)
    return message.channel
      .send("**هذا الأمر فقط للسيرفرات**")
      .then(m => m.delete(5000));
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`");
  let copy = "ScrpitBot";
  let request = `Requested By ${message.author.username}`;
  if (!args)
    return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
  message.channel
    .send(
      `**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``
    )
    .then(msg => {
      msg
        .react("✅")
        .then(() => msg.react("❌"))
        .then(() => msg.react("✅"));

      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "✅" && user.id === message.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "❌" && user.id === message.author.id;
      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 12000
      });
      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 12000
      });
      reaction1.on("collect", r => {
        message.channel
          .send(
            `☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`
          )
          .then(m => m.delete(5000));
        message.guild.members.forEach(m => {
          m.send(args);
          msg.delete();
        });
      });
      reaction2.on("collect", r => {
        message.channel
          .send(`**Broadcast Canceled.**`)
          .then(m => m.delete(5000));
        msg.delete();
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-bc",
  description: "",
  usage: "-bc "
};
