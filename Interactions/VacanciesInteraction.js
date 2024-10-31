const goToVacancies = function(bot,msg,localization,dbmaster) {
  bot.answerCallbackQuery(msg.id).then(()=>{
    let text = localization.markups.vacancy.select;
    dbmaster.users.findOne({id: msg.from.id}).then(res => {
      if(res.course >= 3) {
        bot.sendMessage(msg.message.chat.id, "Гойда, больше 3 курса");
      }
      else{
        bot.sendMessage(msg.message.chat.id, "Не гойда, мелкий ещё");
      }
    }).then(()=>{
    bot.deleteMessage(msg.message.chat.id,msg.message.message_id);
  });
})}

module.exports = goToVacancies;
