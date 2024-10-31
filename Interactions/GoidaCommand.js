const goidaCommand = function(bot,msg,localization) {
  bot.sendPhoto(msg.chat.id,"https://src.memorycode.ru/storage/app/public/35011/1686666888.jpg",{caption: "ГООООЙДАААААААААААААА"})
}

const romaCommand = function(bot,msg,localization){
  bot.sendSticker(msg.chat.id,"CAACAgIAAxkBAAEJnrVnIypvm4_W8yMqCJ0JtNcJAAHJugwAApZbAAKovtBJhA3G7Baup942BA").then(msg => {
    bot.sendMessage(msg.chat.id, "Против Ромы нет приёма");
  })
}

module.exports = {goidaCommand, romaCommand};
