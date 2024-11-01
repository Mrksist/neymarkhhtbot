const {InlineKeyboardButton,LinkKeyboardButton} = require("./InlineKeyboardButton.js");
const Specialities = require("../Enums/Specialities.js");
const VacancyAns = require("../Enums/VacancyAns.js");

const VacancySearchKeyboardMarkup = class {
  constructor(localization,speciality) {
    let spec;
    for(let key in Specialities){
      if(Specialities[key].callback.endsWith(speciality)){
        spec = Specialities[key];
        break;
      }
    }
    let url = `https://hh.ru/search/vacancy?${spec.filters}`
    this.inline_keyboard = [
      [
        new LinkKeyboardButton(localization.markups.hi.letsgo, url) 
      ]
    ]
  }
}

const VacancyQuestionKeyboardMarkup = class {
  constructor(localization){
    let bas = [];
    for(let key in VacancyAns){
      bas.push([new InlineKeyboardButton(VacancyAns[key].text,VacancyAns[key].callback)]);
    }
    this.inline_keyboard = bas;
  }
}

module.exports = {VacancySearchKeyboardMarkup,VacancyQuestionKeyboardMarkup};
