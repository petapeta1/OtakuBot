const Discord = require("discord.js");
exports.run = async (client, message, args, tools) => {
  var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Puplic | عامه", "👥", true)
    .addField("Admin | المشرفين", "👑", true)
    .addField("images | صور", "🎞", true);
  message.channel.send(RpsEmbed).then(msg => {
    msg.react("👥");
    msg.react("👑");
    msg
      .react("🎞")
      .then(() => msg.react("👥"))
      .then(() => msg.react("👑"))
      .then(() => msg.react("🎞"));
    let reaction1Filter = (reaction, user) =>
      reaction.emoji.name === "👥" && user.id === message.author.id;
    let reaction2Filter = (reaction, user) =>
      reaction.emoji.name === "👑" && user.id === message.author.id;
    let reaction3Filter = (reaction, user) =>
      reaction.emoji.name === "🎞" && user.id === message.author.id;
    let reaction1 = msg.createReactionCollector(reaction1Filter, {
      time: 20000
    });
    let reaction2 = msg.createReactionCollector(reaction2Filter, {
      time: 19000
    });
    let reaction3 = msg.createReactionCollector(reaction3Filter, {
      time: 18000
    });
    reaction1.on("collect", r => {
      const embed = new Discord.RichEmbed()
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png"
        )
        .setColor("#000000").setDescription(`
      :busts_in_silhouette:***__اوامر عامة__***:loudspeaker: 
**
-anime
-bans
-binv
-botinfo
-channelinfo
-checkgame
-checknick
-checkuser
-color 
-contact
-count
-crinvite
-date
-emojis
-perms
-grole
-hammer
-help
-id
-love
-manga
-member
-ping
-punch
-roles
-report
-roleinfo
-roll
-rooms
-rps
-serverinfo
-sug
-topen
-tclose
-uptime
-vote
-user
-userinfo
-weather

**
`);
      message.author.sendEmbed(embed);
      message.reply("تم ارسالك بلخاص");
    });
    reaction2.on("collect", r => {
      const embed = new Discord.RichEmbed()
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/553862087382925313/556036868492230667/logo-admin-png-4.png"
        )
        .setColor("#000000").setDescription(`
      :key:***__أوامر المشرفين__***:crown: 
**
-role
-ban
-unban
-bc
-ebc
-rbc
-category
-crcolor
-crrole
-clear
-clears
-count
-cto
-clearreactions
-embed
-emojis
-getperms
-giveaway
-hchannel
-schannel
-kick
-say
-lockdown
-tmute
-mute
-unmute
-mutechannel
-unmutechannel
-moveall
-move
-setbot
-slowmode
-setmember
-talk
-lockdown
-unlockdown
-warn
-delwarns
-sr
**
`);
      message.author.sendEmbed(embed);
      message.reply("تم ارسالك بلخاص");
    });
    reaction3.on("collect", r => {
      const embed = new Discord.RichEmbed()
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/4IGqoA1bqVqu_o2I-jY51fqJFy2S8f8NrzcnzxhFtVU/http/reli.sh/wp-content/themes/relish/assets/img/services/icon-games.png"
        )
        .setColor("#000000").setDescription(`
       :video_game: ***__اوامر صور__***:game_die:
 **
-anime
-animemes
-avatar
-baka
-cat
-doggo
-feed
-hug
-kiss
-kitsune
-loli
-moe
-neko
-nep
-pat
-poke
-savatar
-shiba
-slap
-smack
-spank
-tickle
-truth
-waifu
-wallpaper


 **
`);
      message.author.sendEmbed(embed);
      message.reply("تم ارسالك بلخاص");
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "-help",
  description: "to get help",
  usage: "-help"
};
