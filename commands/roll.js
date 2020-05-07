exports.run = (client, msg) => {
  if (msg.author.id === "585444548956913677")
    return msg.channel.send(
      `:game_die: **${msg.author.username}**, you rolled a **${Math.floor(
        Math.random() * 50
      ) + 50}**!`
    );
  msg.channel.send(
    `:game_die: **${msg.author.username}**, you rolled a **${Math.floor(
      Math.random() * 100
    ) + 0}**!`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-roll",
  description: "Rolls a die.",
  usage: "roll"
};
