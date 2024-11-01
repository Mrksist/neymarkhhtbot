const {VacancySearchKeyboardMarkup,VacancyQuestionKeyboardMarkup} = require("../Markups/VacancySearchKeyboardMarkup.js");
const VacancyAns = require("../Enums/VacancyAns.js"); 
const Stickers = require("../Enums/Stickers.js");
const Specialities = require("../Enums/Specialities.js");
const Cities = require("../Enums/Cities.js");

const {mosit,nizit,mosbb,nizbb,nizeg,moseg,nizws,mosws} = require("../Enums/VacancyLists.js");

const goToVacancies = function(bot,msg,localization,dbmaster) {
  bot.answerCallbackQuery(msg.id).then(()=>{
    let text = localization.markups.vacancy.select;
    dbmaster.users.findOne({id: msg.from.id}).then(res => {
      if(Specialities.IT.callback.endsWith(res.speciality)){
        if(Cities.NIZHNY.callback.endsWith(res.city))
          text += nizit;
        if(Cities.MOSCOW.callback.endsWith(res.city))
          text += mosit;
      }
      if(Specialities.BB.callback.endsWith(res.speciality)){
        if(Cities.NIZHNY.callback.endsWith(res.city))
          text += nizbb;
        if(Cities.MOSCOW.callback.endsWith(res.city))
          text += mosbb;
      }
      if(Specialities.EG.callback.endsWith(res.speciality)){
        if(Cities.NIZHNY.callback.endsWith(res.city))
          text += nizeg;
        if(Cities.MOSCOW.callback.endsWith(res.city))
          text += moseg;
      }
      if(Specialities.WS.callback.endsWith(res.speciality)){
        if(Cities.NIZHNY.callback.endsWith(res.city))
          text += nizws;
        if(Cities.MOSCOW.callback.endsWith(res.city))
          text += mosws; 
      }
      bot.sendMessage(msg.message.chat.id,text, {parse_mode: "markdown"}).then(()=>{
        bot.sendMessage(msg.message.chat.id,localization.markups.vacancySelect.question,
          {
            reply_markup: new VacancyQuestionKeyboardMarkup(localization), 
          }
        );
      });
    }).then(()=>{
      bot.deleteMessage(msg.message.chat.id,msg.message.message_id);
    });
  })
}

const vacancySelectAns = function(bot,msg,localization,dbmaster){
  bot.answerCallbackQuery(msg.id).then(async ()=>{
    if(msg.data === VacancyAns.YES.callback){
      await bot.sendSticker(msg.message.chat.id,Stickers.GREAT);
      await bot.sendMessage(msg.message.chat.id,localization.markups.vacancySelect.cool);
    }
    else if(msg.data === VacancyAns.TL.callback){
      await bot.sendMessage(msg.message.chat.id,localization.markups.vacancySelect.tl);
    }
    else if(msg.data === VacancyAns.NV.callback){
      dbmaster.users.findOne({id: msg.from.id}).then(res => {
        bot.sendMessage(msg.message.chat.id,localization.markups.vacancySelect.others,
        {reply_markup: new VacancySearchKeyboardMarkup(localization,res.speciality)});
      })
    }
  }).then(()=>{
    bot.deleteMessage(msg.message.chat.id,msg.message.message_id);
  });
}

module.exports = {goToVacancies,vacancySelectAns};
