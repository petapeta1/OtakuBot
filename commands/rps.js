let rps = ["**:moyai: حجر**", "**:pencil: ورقة**", "**:scissors: مقص**"];
function random() { return `${rps[Math.floor(Math.random() * rps.length)]}!` }
exports.run = (client, msg, args) => {
    let choice = args.join(" ").toLowerCase();
    if (choice === '') return msg.reply("wait.");
    if (choice !== "حجرة" && choice !== "ورقة" && choice !== "مقص") return msg.reply(`please choose wut it's available. ${choice} not valide :P`);
    msg.reply(random());
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '-rps',
  description: 'Rock, Papper, Scissors.',
  usage: 'rps'
};