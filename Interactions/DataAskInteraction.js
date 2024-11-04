import { AGE, COURSE, CITY, UNIVERSITY, SPECIALITY } from "../Enums/Stickers.js";
import { MOSCOW, NIZHNY } from "../Enums/Cities.js";

import { AgeAskKeyboardMarkup, CourseAskKeyboardMarkup, CityAskKeyboardMarkup, UniversityAskKeyboardMarkup, SpecialityAskKeyboardMarkup } from "../Markups/DataAskKeyboardMarkups.js";

const askAge = function(bot, msg, localization, dbmaster) {
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, AGE)
    .then(mes => {
      return dbmaster.sessions.updateOne({ id: msg.from.id }, { $set: { sticker: { chat: mes.chat.id, mes: mes.message_id } } })
    }).then(() => {
      bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.age,
        { reply_markup: new AgeAskKeyboardMarkup(localization) });
    });
}

const askCourse = function(bot, msg, localization, dbmaster) {
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, COURSE).then(async (mes) => {
    let res = await dbmaster.sessions.findOne({ id: msg.from.id });
    bot.deleteMessage(res.sticker.chat, res.sticker.mes);
    res.info.age = parseInt(msg.data.split(":")[1]);
    let prs = await dbmaster.sessions.updateOne({ id: msg.from.id }, { $set: { id: res.id, sticker: { chat: mes.chat.id, mes: mes.message_id }, info: res.info } });
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.course, { reply_markup: new CourseAskKeyboardMarkup(localization) });
    return msg;
  }).then(msg => {
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
  });
}

const askCity = function(bot, msg, localization, dbmaster) {
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, CITY).then(async (mes) => {
    let res = await dbmaster.sessions.findOne({ id: msg.from.id });
    bot.deleteMessage(res.sticker.chat, res.sticker.mes);
    res.info.course = parseInt(msg.data.split(":")[1]);
    let prs = await dbmaster.sessions.updateOne({ id: msg.from.id }, { $set: { id: res.id, sticker: { chat: mes.chat.id, mes: mes.message_id }, info: res.info } });
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.city, { reply_markup: new CityAskKeyboardMarkup(localization) });
  }).then(() => {
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
  });
}

const askUniversity = function(bot, msg, localization, dbmaster) {
  let city;
  if (msg.data === MOSCOW.callback) {
    city = MOSCOW;
  }
  if (msg.data === NIZHNY.callback) {
    city = NIZHNY;
  }
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, UNIVERSITY).then(async (mes) => {
    let res = await dbmaster.sessions.findOne({ id: msg.from.id });
    bot.deleteMessage(res.sticker.chat, res.sticker.mes);
    res.info.city = msg.data.split(":")[1];
    let prs = await dbmaster.sessions.updateOne({ id: msg.from.id }, { $set: { id: res.id, sticker: { chat: mes.chat.id, mes: mes.message_id }, info: res.info } });
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.university, { reply_markup: new UniversityAskKeyboardMarkup(localization, city) });
  }).then(() => {
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
  });
}

const askSpeciality = function(bot, msg, localization, dbmaster) {
  bot.answerCallbackQuery(msg.id);
  bot.sendSticker(msg.message.chat.id, SPECIALITY).then(async (mes) => {
    let res = await dbmaster.sessions.findOne({ id: msg.from.id });
    bot.deleteMessage(res.sticker.chat, res.sticker.mes);
    res.info.university = msg.data.split(":")[1];
    let prs = await dbmaster.sessions.updateOne({ id: msg.from.id }, { $set: { id: res.id, sticker: { chat: mes.chat.id, mes: mes.message_id }, info: res.info } });
    bot.sendMessage(msg.message.chat.id, localization.markups.dataAsk.speciality, { reply_markup: new SpecialityAskKeyboardMarkup(localization) });
  }).then(() => {
    bot.deleteMessage(msg.message.chat.id, msg.message.message_id);
  });
}

export default { askAge, askCourse, askCity, askUniversity, askSpeciality };
