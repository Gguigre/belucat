const Discord = require("discord.js");

class Belucat {
  constructor(token) {
    this.bot = new Discord.Client();
    this.bot.on("ready", function() {
      console.log(`Belucat is online !`);
    });

    this.bot.on("message", message => {
      console.log("== New message received");
      if (message.content.match(/(.*)belucat(.*)/gi)) {
        console.log("Contains Belucat");
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
