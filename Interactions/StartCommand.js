const Stickers = require("../Enums/Stickers.js");
const {StartKeyboardMarkup,WasBeforeKeyboardMarkup} = require("../Markups/StartKeyboardMarkup.js");

const hiMessage = function(bot,msg,localization,dbmaster){
  bot.sendMessage(msg.chat.id, localization.hiMessage, {
    reply_markup: new StartKeyboardMarkup(localization) 
  }).then(() => {
    dbmaster.sessions.deleteMany({id:msg.from.id});
  }).then(()=>{
    dbmaster.sessions.insertOne({id:msg.from.id,info: {}});
  });
}

const wasBeforeMessage = function(bot,msg,localization) {
  bot.sendMessage(msg.chat.id, localization.wasBeforeMessage, {
    reply_markup: new WasBeforeKeyboardMarkup(localization)
  });
}

// Обнимаю

const startCommand = function(bot,msg,localization,dbmaster) {
  dbmaster.users.find({id: msg.from.id}).toArray().then(res => {
    if(res.length == 0){
      if(localization.type.toLowerCase() === "zoomer") {
        bot.sendSticker(msg.chat.id,Stickers.HI).then(() => {
          hiMessage(bot,msg,localization,dbmaster);
        });
      }
      else {
        hiMessage(bot,msg,localization);
      }
    }
    else{
      bot.sendSticker(msg.chat.id,Stickers.HI).then(() => {
          wasBeforeMessage(bot,msg,localization);
      });
    }
  })
}

module.exports = {startCommand,hiMessage};
