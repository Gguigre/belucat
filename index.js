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
  console.log("== New message received");
  if (message.content.match(/(.*)belucat(.*)/gi)) {
    console.log("Contains Belucat");
    message.reply("Mew !");
  }
});

bot.on("message", message => {
  console.log("== New message received");
  if (message.content.match(/(.*) (cat|chat)(.*)/gi)) {
    console.log("Contains cat");
    message.react("🐈");
  }
});

bot.on("message", message => {
  console.log("== New message received");
  if (message.member.user.username.match(/alcain/gi)) {
    console.log("From alcain");
    message.react("🌯");
  }
});

bot.login(token);
