const goToVacancies = function(bot,msg,localization,dbmaster) {
  bot.answerCallbackQuery(msg.id).then(()=>{
    bot.sendMessage(msg.message.chat.id, "Вот все твои вакансии:");
  }).then(()=>{
    bot.deleteMessage(msg.message.chat.id,msg.message.message_id);
  })
}

module.exports = goToVacancies;
