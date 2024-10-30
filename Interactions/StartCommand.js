const Stickers = require("../Enums/Stickers.js");
const StartKeyboardMarkup = require("../Markups/StartKeyboardMarkup.js");

const hiMessage = function(bot,msg,localization){
  bot.sendMessage(msg.chat.id, localization.hiMessage, {
    reply_markup: new StartKeyboardMarkup(localization) 
  });
}

const startCommand = function(bot,msg,localization) {
  // TODO: Make sync with database

  if(localization.type.toLowerCase() === "zoomer") {
    bot.sendSticker(msg.chat.id,Stickers.HI).then(() => {
      hiMessage(bot,msg,localization);
    })
  }
  else {
    hiMessage(bot,msg,localization);
  }
}

module.exports = startCommand;
