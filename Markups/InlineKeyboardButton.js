const InlineKeyboardButton = class {
  constructor(text,callback_data){
    this.text = text;
    this.callback_data = callback_data;
  }
}

const LinkKeyboardButton = class {
  constructor(text,url){
    this.text = text;
    this.url = url;
  }
}

module.exports = {InlineKeyboardButton,LinkKeyboardButton};
