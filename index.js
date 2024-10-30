const TelegramBot = require('node-telegram-bot-api')
const parseInteraction = require("./Interactions/ParseInteraction.js");

const token = require("./token.json").token;

const bot = new TelegramBot(token, {polling: true});

const localization = require("./Lang/Zoomer.json");

bot.on('message', (msg)=>{
  parseInteraction(bot,msg,localization);
})
