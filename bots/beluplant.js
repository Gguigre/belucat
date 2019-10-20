const Discord = require("discord.js");

const RESPONSE_RATE = 0.05;

class Beluplant {
  constructor(token) {
    this.bot = new Discord.Client();
    this.bot.on("ready", function() {
      console.log(`Beluplant is online !`);
    });

    this.bot.on("message", message => {
      console.log("== Beluplant : New message received");
      if (Math.random() < RESPONSE_RATE) {
        const plants = [`🌱`, `🌿`, `🌺`];
        plants.sort((plant1, plant2) => Math.random() - Math.random());
        console.log("Reacting", plants[0]);
        message.react(plants[0]);
      }
    });

    this.bot.login(token);
  }
}

module.exports = Beluplant;
