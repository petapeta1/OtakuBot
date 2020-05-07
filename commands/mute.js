const settings = require("../settings.json");
const Discord = require("discord.js");
const customisation = require("../customisation.json");
exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
    return message.reply("**I Don't Have ` MANAGE_ROLES ` Permission**");
  let reason = args.slice(1).join(" ");
  let user = message.mentions.users.first();
  let muteRole = client.guilds
    .get(message.guild.id)
    .roles.find("name", "Muted");
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message
      .reply("انت لا تملك صلاحيات !! ")
      .then(msg => msg.delete(5000));
    
  if (message.mentions.users.first().id === "585444548956913677")
    return message.reply("**لا يمكنك كتم الاله**");
  if (message.author.id === message.mentions.users.first())
    return message.reply("لا يمكنك ايقاف نفسك Owo:facepalm:");
  if (!muteRole) {
    try {
        muteRole = await message.guild.createRole({
            name:"Muted",
            color: "#000000",
            permissions:[]
        });

        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muteRole, {
                SEND_MESSAGES: false,
                MANAGE_MESSAGES: false,
                READ_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
    } catch(e) {
        console.log(e.stack);
    }
}
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));
  if (user.id === client.user.id)
    return message.channel.send(" هل انت مجنون ؟ لا يمكنني كتم نفسي:joy:");
    if (message.mentions.users.size < 1)
      return message.reply("** يجب عليك المنشن اولاً **").then(msg => {
        msg.delete(5000);
      });
    if (message.mentions.users.first().id === "585444548956913677")
      return message.reply("**لا يمكنك كتم الاله**");
    message.guild.member(user).addRole(muteRole);
    const muteembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .addField("**  user**", "**[ " + `${user.tag}` + " ]**", true)
      .addField(
        "**  admin  **",
        "**[ " + `${message.author.tag}` + " ]**",
        true
      )
      .addField("**  reason**", "**[ " + `${reason}` + " ]**", true)
      .addField("User", user, true);

    message.channel.send({ embed: muteembed });
    var muteembeddm = new Discord.RichEmbed()
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setDescription(
        `      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`
      )
      .setFooter(`في سيرفر : ${message.guild.name}`)
      .setColor("RANDOM");
    user.send(muteembeddm);
  };
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["m"],
  permLevel: 0
};

exports.help = {
  name: "-mute",
  description: "mute member",
  usage: "mute [mention]"
};
