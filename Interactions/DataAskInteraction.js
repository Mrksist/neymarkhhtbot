const Stickers = require("../Enums/Stickers.js");
const Cities = require("../Enums/Cities.js");

const {AgeAskKeyboardMarkup, CourseAskKeyboardMarkup,
  CityAskKeyboardMarkup, UniversityAskKeyboardMarkup,
  SpecialityAskKeyboardMarkup} = require("../Markups/DataAskKeyboardMarkups.js");

const askAge = function(bot, msg, localization){
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, Stickers.AGE).then(()=>{
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.age, 
        {reply_markup: new AgeAskKeyboardMarkup(localization)});
  });
}

const askCourse = function(bot,msg,localization){
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, Stickers.COURSE).then(()=>{
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.course, 
        {reply_markup: new CourseAskKeyboardMarkup(localization)});
  })
}

const askCity = function(bot,msg,localization){
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, Stickers.CITY).then(()=>{
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.city, 
        {reply_markup: new CityAskKeyboardMarkup(localization)});
  })
}

const askUniversity = function(bot,msg,localization){
  let city;
  if(msg.data === Cities.MOSCOW.callback){
    city = Cities.MOSCOW;
  }
  if(msg.data === Cities.NIZHNY.callback){
    city = Cities.NIZHNY;
  }
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, Stickers.UNIVERSITY).then(()=>{
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.university, 
        {reply_markup: new UniversityAskKeyboardMarkup(localization,city)});
  });
}

const askSpeciality = function(bot,msg,localization){
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, Stickers.SPECIALITY).then(()=>{
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.speciality, 
        {reply_markup: new SpecialityAskKeyboardMarkup(localization)});
  })
}

module.exports = {askAge,askCourse,askCity,askUniversity,askSpeciality};
