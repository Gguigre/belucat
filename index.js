const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();

bot.on("ready", function() {
  console.log("Je suis connecté !");
});

bot.on("message", message => {
  if (message.content === "ping") {
    message.reply("pong !");
  }
});

bot.login(config.discord_token);