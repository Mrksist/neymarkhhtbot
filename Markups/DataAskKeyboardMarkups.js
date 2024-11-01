const Callbacks = require("../Enums/Callbacks.js");
const {InlineKeyboardButton} = require("./InlineKeyboardButton.js");

const Ages = require("../Enums/Ages.js");
const Courses = require("../Enums/Courses.js");
const Cities = require("../Enums/Cities.js");
const Universities = require("../Enums/Universities.js");
const Specialities = require("../Enums/Specialities.js");


const AgeAskKeyboardMarkup = class {
  constructor(localization) {
    let buttonList = [];
    for(var propName in Ages){
      buttonList.push([new InlineKeyboardButton(Ages[propName].text,Ages[propName].callback)]);
    }
    this.inline_keyboard = buttonList
  }
}

const CourseAskKeyboardMarkup = class {
  constructor(localization) {
    let buttonList = [];
    for(var propName in Courses){
      buttonList.push([new InlineKeyboardButton(Courses[propName].text,Courses[propName].callback)]);
    }
    this.inline_keyboard = buttonList
  }
}

const CityAskKeyboardMarkup = class {
  constructor(localization) {
    let buttonList = [];
    for(var propName in Cities){
      buttonList.push([new InlineKeyboardButton(Cities[propName].text,Cities[propName].callback)]);
    }
    this.inline_keyboard = buttonList
  }
}

const UniversityAskKeyboardMarkup = class {
  constructor(localization,city) {
    let buttonList = [];
    let univs;
    if(city == Cities.MOSCOW){
      univs = Universities.Moscow;
    }
    else{
      univs = Universities.Nizhny;
    }
    for(var propName in univs){
      buttonList.push([new InlineKeyboardButton(univs[propName].text,univs[propName].callback)]);
    }
    this.inline_keyboard = buttonList
  }
}

const SpecialityAskKeyboardMarkup = class {
  constructor(localization) {
    let buttonList = [];
    for(var propName in Specialities){
      buttonList.push([new InlineKeyboardButton(Specialities[propName].text,Specialities[propName].callback)]);
    }
    this.inline_keyboard = buttonList
  }
}

module.exports = {AgeAskKeyboardMarkup,CourseAskKeyboardMarkup,CityAskKeyboardMarkup,UniversityAskKeyboardMarkup,SpecialityAskKeyboardMarkup};
