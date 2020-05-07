const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}


  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '-bans',
  description: 'عدد الاشخاص المحضورين',
  usage: 'bans '
};