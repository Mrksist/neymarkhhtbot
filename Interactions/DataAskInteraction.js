const askAge = function(bot, msg, localization){
  bot.editMessageReplyMarkup(msg.id, {reply_markup : new AgeAskKeyboardMarkup(bot,msg,localization)});
}

const askCourse = function(bot,msg,localization){
  bot.editMessageReplyMarkup(msg.id, {reply_markup : new CourseAskKeyboardMarkup(bot,msg,localization)});
}

const askCity = function(bot,msg,localization){
  bot.editMessageReplyMarkup(msg.id, {reply_markup : new CityAskKeyboardMarkup(bot,msg,localization)});
}

const askUniversity = function(bot,msg,localization){
  bot.editMessageReplyMarkup(msg.id, {reply_markup : new UniversityAskKeyboardMarkup(bot,msg,localization)});
}

const askSpeciality = function(bot,msg,localization){
  bot.editMessageReplyMarkup(msg.id, {reply_markup : new SpecialityAskKeyboardMarkup(bot,msg,localization)});
}

module.exports = {askAge,askCourse,askCity,askUniversity,askSpeciality};
