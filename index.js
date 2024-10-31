const TelegramBot = require('node-telegram-bot-api')
const {parseCommand,parseInteraction} = require("./Interactions/ParseInteraction.js");

const token = require("./token.json").token;

const bot = new TelegramBot(token, {polling: true});

const dbMaster = require("./Database/MongoDBMaster.js");

const dbmaster = new dbMaster();
dbmaster.connect()

bot.on('message', (msg) => {
  //bot.sendMessage(1914333121,"Ты отправляешься на СВО")
  parseCommand(bot,msg,dbmaster);
})

bot.on('callback_query', (msg) => {
  parseInteraction(bot,msg,dbmaster);
})
