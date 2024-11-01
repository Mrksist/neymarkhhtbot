const Stickers = require("../Enums/Stickers.js");
const Cities = require("../Enums/Cities.js");

const {AgeAskKeyboardMarkup, CourseAskKeyboardMarkup,
  CityAskKeyboardMarkup, UniversityAskKeyboardMarkup,
  SpecialityAskKeyboardMarkup} = require("../Markups/DataAskKeyboardMarkups.js");

const askAge = function(bot, msg, localization, dbmaster){
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, Stickers.AGE)
  .then(mes=>{
    return dbmaster.sessions.updateOne({id: msg.from.id}, {$set: {sticker: {chat: mes.chat.id, mes: mes.message_id}}})
  }).then(res=>{
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.age, 
        {reply_markup: new AgeAskKeyboardMarkup(localization)});
  });
}

const askCourse = function(bot,msg,localization,dbmaster){
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, Stickers.COURSE).then(async (mes)=>{
    let res = await dbmaster.sessions.findOne({id: msg.from.id});
    bot.deleteMessage(res.sticker.chat,res.sticker.mes);
    res.info.age = parseInt(msg.data.split(":")[1]);
    let prs = await dbmaster.sessions.updateOne({id: msg.from.id}, {$set: {id: res.id, sticker: {chat: mes.chat.id, mes: mes.message_id}, info: res.info}}); 
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.course, {reply_markup: new CourseAskKeyboardMarkup(localization)});
    return msg;
  }).then(msg=>{
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
  });
}

const askCity = function(bot,msg,localization,dbmaster){
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, Stickers.CITY).then(async (mes) => {
    let res = await dbmaster.sessions.findOne({id: msg.from.id});
    bot.deleteMessage(res.sticker.chat, res.sticker.mes);
    res.info.course = parseInt(msg.data.split(":")[1]);
    let prs = await dbmaster.sessions.updateOne({id: msg.from.id}, {$set: {id: res.id, sticker: {chat: mes.chat.id, mes: mes.message_id}, info: res.info}});
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.city, {reply_markup: new CityAskKeyboardMarkup(localization)});
  }).then(()=>{
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
  });
}

const askUniversity = function(bot,msg,localization,dbmaster){
  let city;
  if(msg.data === Cities.MOSCOW.callback){
    city = Cities.MOSCOW;
  }
  if(msg.data === Cities.NIZHNY.callback){
    city = Cities.NIZHNY;
  }
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, Stickers.UNIVERSITY).then(async (mes) => {
    let res = await dbmaster.sessions.findOne({id: msg.from.id});
    bot.deleteMessage(res.sticker.chat, res.sticker.mes);
    res.info.city = msg.data.split(":")[1];
    let prs = await dbmaster.sessions.updateOne({id: msg.from.id}, {$set: {id: res.id, sticker: {chat: mes.chat.id, mes: mes.message_id}, info: res.info}});
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.university, {reply_markup: new UniversityAskKeyboardMarkup(localization,city)});
  }).then(()=>{
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
  });
}

const askSpeciality = function(bot,msg,localization,dbmaster){
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, Stickers.SPECIALITY).then(async (mes) => {
    let res = await dbmaster.sessions.findOne({id: msg.from.id});
    bot.deleteMessage(res.sticker.chat, res.sticker.mes);
    res.info.university = msg.data.split(":")[1];
    let prs = await dbmaster.sessions.updateOne({id: msg.from.id}, {$set: {id: res.id, sticker: {chat: mes.chat.id, mes: mes.message_id}, info: res.info}});
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.speciality, {reply_markup: new SpecialityAskKeyboardMarkup(localization)});
  }).then(()=>{
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
  });
}

module.exports = {askAge,askCourse,askCity,askUniversity,askSpeciality};
