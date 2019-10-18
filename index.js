const Discord = require("discord.js");
const Belucat = require("./bots/belucat");
var http = require("http");

let BELUCAT_TOKEN = "";
try {
  const config = require("./config.json");
  BELUCAT_TOKEN = config.discord_token;
} catch {
  BELUCAT_TOKEN = process.env.DISCORD_TOKEN;
}

const belucat = new Belucat(BELUCAT_TOKEN);

http
  .createServer(function(request, response) {})
  .listen(process.env.PORT || 5000);
