const InlineKeyboardButton = class {
  constructor(localization,callback_data){
    this.text = localization.markups.hi.letsgo;
    this.callback_data = callback_data;
  }
}

module.exports = InlineKeyboardButton;
