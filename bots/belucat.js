const Discord = require("discord.js");
const path = require("path");

class Belucat {
  constructor(token) {
    this.bot = new Discord.Client();
    this.bot.on("ready", function() {
      console.log(`Belucat is online !`);
    });

    this.bot.on("message", message => {
      console.log("== Belucat : New message received");
      if (message.content.match(/(.*)belucat(.*)/gi)) {
        if (message.content.match(/(.*)(dodo)(.*)/gi)) {
          this.voiceChannel.leave();
          return message.react("💤");
        }

        console.log("Contains Belucat");
        this.voiceChannel = message.member.voiceChannel;
        if (!this.voiceChannel) {
          message.react("😿");
          return message.reply("Couldn't find you... Where are m'you ?");
        }
        this.voiceChannel
          .join()
          .then(connection => {
            console.log("voiceChannel joigned");
            const file = path.resolve(
              `./asset/miaou${Math.random() < 0.5 ? "" : "2"}.ogg`
            );
            console.log("playing", file);
            const dispatcher = connection.playFile(file);
          })
          .catch(console.error);
        message.reply("Mew !");
      }
      if (message.content.match(/(.*) (cat|chat)(.*)/gi)) {
        console.log("Contains cat");
        message.react("🐈");
      }
    });

    this.bot.login(token);
  }
}

module.exports = Belucat;
