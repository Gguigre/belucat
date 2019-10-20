const Discord = require("discord.js");
const Belucat = require("./bots/belucat");
const Beluplant = require("./bots/beluplant");
var http = require("http");

let BELUCAT_TOKEN = "";
try {
  const config = require("./config.json");
  BELUCAT_TOKEN = config.belucat_token;
} catch {
  BELUCAT_TOKEN = process.env.BELUCAT_TOKEN;
}

let BELUPLANT_TOKEN = "";
try {
  const config = require("./config.json");
  BELUPLANT_TOKEN = config.beluplant_token;
} catch {
  BELUPLANT_TOKEN = process.env.BELUPLANT_TOKEN;
}

const belucat = new Belucat(BELUCAT_TOKEN);
const beluplant = new Beluplant(BELUPLANT_TOKEN);

http
  .createServer(function(request, response) {})
  .listen(process.env.PORT || 5000);
