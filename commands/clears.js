const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  if (msg.author.bot) return;
  let textxt = args.slice(0).join("");
  if (msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
      msg.delete().then;
      msg.channel
        .send("***```ضع عدد الرسائل التي تريد مسحها 👌```***")
        .then(m => m.delete(3000));
    } else {
      msg.delete().then;
      msg.delete().then;
      msg.channel.bulkDelete(textxt);
      msg.channel
        .send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```")
        .then(m => m.delete(3000));
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["مسسح"],
  permLevel: 0
};

exports.help = {
  name: "-clears",
  description: "Sends a random cat",
  usage: "cat"
};
