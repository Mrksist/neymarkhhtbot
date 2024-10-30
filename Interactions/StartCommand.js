const StartKeyboardMarkup = require("../Markups/StartKeyboardMarkup.js");

const hiMessage = function(bot,msg,localization){
  bot.sendMessage(msg.chat.id, localization.hiMessage, {
    reply_markup: new StartKeyboardMarkup(localization) 
  });
}

const startCommand = function(bot,msg,localization) {
  // TODO: Make sync with database

  if(localization.type.toLowerCase() === "zoomer") {
    bot.sendSticker(msg.chat.id,"https://src.memorycode.ru/storage/app/public/35011/1686666888.jpg").then(() => {
      hiMessage(bot,msg,localization);
    })
  }
  else {
    hiMessage(bot,msg,localization);
  }
}

module.exports = startCommand;
