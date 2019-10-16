const Discord = require("discord.js");
let token = "";
try {
  const config = require("./config.json");
  token = config.discord_token;
} catch {
  token = process.env.DISCORD_TOKEN;
}
const bot = new Discord.Client();

bot.on("ready", function() {
  console.log("Je suis connecté !");
});

bot.on("message", message => {
  if (message.content.match(/(.*)belucat(.*)/gi)) {
    message.reply("Mew !");
  }
});

bot.on("message", message => {
  if (message.content.match(/(.*) (cat|chat)(.*)/gi)) {
    message.react("🐈");
  }
});

bot.login(token);
