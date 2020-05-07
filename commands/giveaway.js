const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args, tools) => {
  var time = moment().format("Do MMMM YYYY , hh:mm");
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
    hours = currentTime.getHours() + 3,
    minutes = currentTime.getMinutes(),
    done = currentTime.getMinutes() + duration / 60000,
    seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }

  var filter = m => m.author.id === message.author.id;
  if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      ":heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**"
    );
  message.channel
    .send(`:eight_pointed_black_star:| **اكتب اسم روم الجيفاواي**`)
    .then(msg => {
      message.channel
        .awaitMessages(filter, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
          let room = message.guild.channels.find(
            "name",
            collected.first().content
          );
          if (!room)
            return message.channel.send(
              ":heavy_multiplication_x:| **i Found It :(**"
            );
          room = collected.first().content;
          collected.first().delete();
          msg
            .edit(":eight_pointed_black_star:| **كم تريد وقت الجيفواي**")
            .then(msg => {
              message.channel
                .awaitMessages(filter, {
                  max: 1,
                  time: 20000,
                  errors: ["time"]
                })
                .then(collected => {
                  if (isNaN(collected.first().content))
                    return message.channel.send(
                      ":heavy_multiplication_x:| **انا لم افهم هاذا الوقت**"
                    );
                  duration = collected.first().content * 60000;
                  collected.first().delete();
                  msg
                    .edit(":eight_pointed_black_star:| **ما هي الجائزة؟**")
                    .then(msg => {
                      message.channel
                        .awaitMessages(filter, {
                          max: 1,
                          time: 20000,
                          errors: ["time"]
                        })
                        .then(collected => {
                          title = collected.first().content;
                          collected.first().delete();
                          msg.delete();
                          message.delete();
                          try {
                            let giveEmbed = new Discord.RichEmbed()
                              .setDescription(
                                `**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration /
                                  60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`
                              )
                              .setFooter(
                                message.author.username,
                                message.author.avatarURL
                              );
                            message.guild.channels
                              .find("name", room)
                              .send(
                                " :heavy_check_mark: **تم صنع الجيفواي** :heavy_check_mark:",
                                { embed: giveEmbed }
                              )
                              .then(m => {
                                let re = m.react("🎉");
                                setTimeout(() => {
                                  let users = m.reactions.get("🎉").users;
                                  let list = users
                                    .array()
                                    .filter(
                                      u =>
                                        (u.id !== m.author.id) !==
                                        client.user.id
                                    );
                                  let gFilter =
                                    list[
                                      Math.floor(Math.random() * list.length) +
                                        0
                                    ];
                                  let endEmbed = new Discord.RichEmbed()
                                    .setAuthor(
                                      message.author.username,
                                      message.author.avatarURL
                                    )
                                    .setTitle(title)
                                    .addField(
                                      "Giveaway Ended !🎉",
                                      `Winners : ${gFilter} \nEnded at :`
                                    )
                                    .setTimestamp();
                                  m.edit("** 🎉 GIVEAWAY ENDED 🎉**", {
                                    embed: endEmbed
                                  });
                                  message.guild.channels
                                    .find("name", room)
                                    .send(
                                      `**Congratulations ${gFilter}! انت ربحت الجيفواي \`${title}\`**`,
                                      { embed: {} }
                                    );
                                }, duration);
                              });
                          } catch (e) {
                            message.channel.send(
                              `:heavy_multiplication_x:| **ليست لدي الصلاحيات الكافية**`
                            );
                            console.log(e);
                          }
                        });
                    });
                });
            });
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
  name: "-giveaway",
  description: "start giveaway",
  usage: "-giveaway"
};
