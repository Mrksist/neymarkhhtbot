const InlineKeyboardButton = require("./InlineKeyboardButton.js");
const Callbacks = require("../Enums/Callbacks.js");

const StartKeyboardMarkup = class {
  constructor(localization) {
    this.inline_keyboard = [
      [
        new InlineKeyboardButton(localization.markups.hi.letsgo, Callbacks.HIBUTTON) 
      ]
    ]
  }
}

const WasBeforeKeyboardMarkup = class {
  constructor(localization) {
    this.inline_keyboard = [
      [
        new InlineKeyboardButton(localization.markups.hi.startOver, Callbacks.STARTOVER)
      ],
      [
        new InlineKeyboardButton(localization.markups.hi.goToVacancies, Callbacks.GOTOVACANCIES)
      ]
    ]
  }
}

module.exports = {StartKeyboardMarkup,WasBeforeKeyboardMarkup};
