const Discord = require("discord.js");
var http = require("http");

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
  if (message.content.match(/(.*) (cat|chat)(.*)/gi)) {
    console.log("Contains cat");
    message.react("🐈");
  }
});

bot.login(token);

http
  .createServer(function(request, response) {})
  .listen(process.env.PORT || 5000);
