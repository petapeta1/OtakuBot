const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  if (
    !message.guild
      .member(client.user)
      .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
  )
    return message.reply("❌**خطا:** انا امتلك صلاحية **Manage Roles**!");
  if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS"))
    return message.reply(
      "❌**خطا:** انت لا تمتلك صلاحية **Manage Roles** Owo!"
    );
  if (message.mentions.users.size === 0)
    return message.reply(
      "❌ حدد من ترغب بمنحه دور.\nمثال: `addrole @user Members`"
    );
  let member = message.guild.member(message.mentions.users.first());
  if (!member)
    return message.reply("❌**Error:** That user does not seem valid.");
  let name = message.content
    .split(" ")
    .splice(2)
    .join(" ");
  let role = message.guild.roles.find("name", name);
  if (!role)
    return message.reply(`❌**Error:** ${name} غير موجود بهذا السيرفر!`);
  if (!role || !member.roles.has(role.id)) {
    let botRolePosition = message.guild.member(client.user).highestRole
      .position;
    let rolePosition = role.position;
    let userRolePossition = message.member.highestRole.position;
    if (userRolePossition <= rolePosition)
      return message.channel.send(
        "❌**خطا:** فشل اضافة الدور الذي حددته للعضو نضرا لضعف رتبتك او قلتها "
      );
    if (botRolePosition <= rolePosition)
      return message.channel.send(
        "❌**خطا:** فشل اضافة الدور الذي حددته لأن رتبتي اعلى من الدور الذي حددته او العكس صحيح."
      );
    member.addRole(role).catch(e => {
      return message.channel.send(`❌**Error:**\n${e}`);
    });
    message.channel.send(
      `:white_check_mark: Changed roles for **${
        message.mentions.users.first().username
      }** , **+${name}** `
    );
  }
  if (!role || member.roles.has(role.id)) {
    await member.removeRole(role);
    message.channel.sendMessage(
      `:white_check_mark: Changed roles for **${
        message.mentions.users.first().username
      }** , **-${name}** `
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
  name: "-role",
  description: "منح ادوار للأعضاء. انها سهلة كما تعلم.",
  usage: "addrole [mention] [role name (don't mention the role)]"
};
