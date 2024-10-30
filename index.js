const TelegramBot = require('node-telegram-bot-api')
const {parseCommand,parseInteraction} = require("./Interactions/ParseInteraction.js");

const token = require("./token.json").token;

const bot = new TelegramBot(token, {polling: true});

const localization = require("./Lang/Zoomer.json");

bot.on('message', (msg)=>{
  parseCommand(bot,msg,localization);
})

bot.on('callback_query', (msg) => {
  parseInteraction(bot,msg,localization);
})
