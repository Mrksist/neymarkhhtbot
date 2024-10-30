const InlineKeyboardButton = class {
  constructor(text,callback_data){
    this.text = text;
    this.callback_data = callback_data;
  }
}

module.exports = InlineKeyboardButton;
