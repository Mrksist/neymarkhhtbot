const InlineKeyboardButton = require("./InlineKeyboardButton.js");
const Callbacks = require("../Enums/Callbacks.js");

const StartKeyboardMarkup = class {
  constructor(localization) {
    this.inline_keyboard = [
      [
        new InlineKeyboardButton(localization, Callbacks.HIBUTTON) 
      ]
    ]
  }
}

module.exports = StartKeyboardMarkup;
