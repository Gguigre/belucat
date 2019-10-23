const Discord = require("discord.js");
const path = require("path");

const FEEDING_INTERVAL_IN_MINUTES = 30;

class Belucat {
  constructor(token) {
    this.bot = new Discord.Client();
    this.bot.on("ready", function() {
      console.log(`Belucat is online !`);
    });

    this.bot.on("message", message => {
      if (this.lastFeedingTime > 1000 * 60 * FEEDING_INTERVAL_IN_MINUTES) {
        message.reply("I'm(ew) 'ngry");
      }
      console.log("== Belucat : New message received");
      if (message.content.match(/(.*)belucat(.*)/gi)) {
        if (message.content.match(/(.*)(dodo)(.*)/gi)) {
          this.voiceChannel.leave();
          return message.react("💤");
        }

        if (message.content.match(/\.feed\(\)/gi)) {
          const now = new Date();
          if (
            now - this.lastFeedingTime <
            1000 * 60 * FEEDING_INTERVAL_IN_MINUTES
          ) {
            message.react("🐱");
          } else {
            message.react("😻");
          }
          this.lastFeedingTime = new Date();
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
