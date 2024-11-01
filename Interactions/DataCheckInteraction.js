const {WasBeforeKeyboardMarkup} = require("../Markups/StartKeyboardMarkup.js")
const startCommand = require("../Interactions/StartCommand.js");

const Stickers = require("../Enums/Stickers.js");
const Cities = require("../Enums/Cities.js");
const Universities = require("../Enums/Universities.js");
const Specialities = require("../Enums/Specialities.js")

const {hiMessage} = require("./StartCommand.js");

const checkData = function (bot,msg,localization,dbmaster) {
  bot.answerCallbackQuery(msg.id);
  dbmaster.sessions.findOne({id: msg.from.id}).then(async (res) => {
    bot.deleteMessage(res.sticker.chat, res.sticker.mes);
    textt = localization.markups.dataCheck.pattern1;

    textt += `Возраст: ${res.info.age}\n\n`;
    textt += `Курс: ${res.info.course}\n\n`;

    let city = "undefined"
    for(key in Cities){
      if(Cities[key].callback.endsWith(res.info.city)){
        city = Cities[key].text;
      }
    }

    let university = "undefined";
    for(key in Universities){
      for(key1 in Universities[key]){

        if(Universities[key][key1].callback.endsWith(res.info.university)){
          university = Universities[key][key1].text;
        }
      }
    }

    textt += `Город: ${city}\n\n`;
    textt += `Универ: ${university}\n\n`;

    for(key in Specialities){
      if(Specialities[key].callback === msg.data){
        textt += `Специальность: ${Specialities[key].text}`;
      }
    }
   
    textt += localization.markups.dataCheck.pattern2;

    res.info.speciality = msg.data.split(":")[1];
    res.info.zoomer = true;
    res.info.id = msg.from.id;

    await dbmaster.users.deleteMany({id: msg.from.id});
    await dbmaster.users.insertOne(res.info);

    bot.sendMessage(msg.message.chat.id,textt,{
      reply_markup: new WasBeforeKeyboardMarkup(localization)
    });

    bot.deleteMessage(msg.message.chat.id,msg.message.message_id);
  })
}

const startOver = function(bot,msg,localization,dbmaster) {
  bot.answerCallbackQuery(msg.id);
  dbmaster.users.deleteMany({id: msg.from.id}).then(()=>{
    hiMessage(bot,msg.message,localization,dbmaster); 
  }).then(()=>{
    bot.deleteMessage(msg.message.chat.id,msg.message.message_id);
  })
}

module.exports = {checkData,startOver};
