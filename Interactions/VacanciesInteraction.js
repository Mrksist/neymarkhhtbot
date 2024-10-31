const goToVacancies = function(bot,msg,localization,dbmaster) {
  bot.answerCallbackQuery(msg.id).then(()=>{
    let text = localization.markups.vacancy.select;
    dbmaster.users.findOne({id: msg.from.id}).then(res => {
      if(res.course >= 3) {
        text += `[Стажёр-разработчик бекенд Яндекса](https://nn.hh.ru/vacancy/108406880)\n\n`;
        text += `[Стажёр-разработчик бекенд Google](https://nn.hh.ru/vacancy/108406880)\n\n`;
        text += `[Стажёр-разработчик бекенд Сбер](https://nn.hh.ru/vacancy/103924840)\n\n`;
        text += `[Стажёр-разработчик Java ASTON](https://nn.hh.ru/vacancy/108872205)`;
        bot.sendMessage(msg.message.chat.id, text, {parse_mode: "markdown", link_preview_options: {is_disabled: true}});
      }
      else{
        text += `[Java-разработчик/Java developer](https://hh.ru/employer/4649269?dpt=4649269-4649269-multipro)\n\n`;
        text += `[Frontend-разработчик](https://nn.hh.ru/vacancy/108937839)\n\n`;
        text += `[Стажер-разработчик интерфейса Google](https://hh.ru/vacancy/108254057)`
        bot.sendMessage(msg.message.chat.id, text, {parse_mode: "markdown", link_preview_options: {is_disabled: true}});
      }
    }).then(()=>{
    bot.deleteMessage(msg.message.chat.id,msg.message.message_id);
  });
})}

module.exports = goToVacancies;
