import TelegramBot from 'node-telegram-bot-api';
import { parseCommand, parseInteraction } from "./Interactions/ParseInteraction.js";

import { token } from "./token.json";

const bot = new TelegramBot(token, { polling: true });

import dbMaster from "./Database/MongoDBMaster.js";

const dbmaster = new dbMaster();
dbmaster.connect()

bot.on('message', (msg) => {
  parseCommand(bot, msg, dbmaster);
})

bot.on('callback_query', (msg) => {
  parseInteraction(bot, msg, dbmaster);
})
