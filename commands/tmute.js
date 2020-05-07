const Discord = require("discord.js");
const ms = require("ms");
const customisation = require("../customisation.json");

exports.run = async (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
    return message.reply("**I Don't Have ` MANAGE_ROLES ` Permission**");
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("لا تمتلك الصلاحيات اللازمة");
  let tomute =
    message.mentions.users.first() || message.guild.members.get(args[0]);
  if (!tomute)
    return message.reply("** يجب عليك المنشن اولاً ");
  if (message.author.id === message.mentions.users.first())
    return message.reply("لا يمكنك ايقاف انفسك");
  
  if (message.mentions.users.first().id === "585444548956913677")
    return message.reply("**لا يمكنك كتم الاله**");
  let muteRole = message.guild.roles.find(`name`, "Muted");
  if (!muteRole) {
    try {
      muteRole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions: []
      });

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muteRole, {
          SEND_MESSAGES: false,
          MANAGE_MESSAGES: false,
          READ_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }
  let mutetime = args[1];
  if (!mutetime) return message.reply("لم تحدد المدة الزمنية للإيقاف المؤقت.");

  const embed = new Discord.RichEmbed()
    .setColor(0x00ffff)
    .setTimestamp()
    .addField("الأمر:", "Temp Mute")
    .addField(
      "العضو:",
      `${tomute.username}#${tomute.discriminator} (${tomute.id})`
    )
    .addField(
      "المشرف:",
      `${message.author.username}#${message.author.discriminator}`
    )
    .addField("المدة", ms(ms(mutetime)))
    .setFooter(`© petabot by ${customisation.ownername}`);
  message.channel.send({ embed });

  message.guild.member(tomute).addRole(muteRole);

  setTimeout(function() {
    message.guild.member(tomute).removeRole(muteRole);
    message.channel.send(`<@${tomute.id}> has been unmuted`);
  }, ms(mutetime));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tm"],
  permLevel: 0
};

exports.help = {
  name: "-tmute",
  description: "يمكنك هذا الأمر من ايقاف عضو تحدده مؤقتا مع تحديد الوقت طبعا",
  usage: "tempmute @user (time)"
};
