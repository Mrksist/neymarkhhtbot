const Callbacks = require("../Enums/Callbacks.js");

const {startCommand,hiMessage} = require("./StartCommand.js");
const {goidaCommand,romaCommand} = require("./GoidaCommand.js")

const zoomer = require("../Lang/Zoomer.json");
const scoof = require("../Lang/Scoof.json");

const {askAge,askCourse,askCity,askUniversity,askSpeciality} = require("./DataAskInteraction.js"); 
const {checkData, startOver} = require("./DataCheckInteraction.js");
const goToVacancies = require("./VacanciesInteraction.js");

const parseCommand = function (bot,msg,dbmaster) {
  dbmaster.users.find({id: msg.from.id}).toArray().then(res => {
    let localization;
    if(res.length == 0 || res[0]['zoomer']){
      localization = zoomer;
    }
    else{
      localization = scoof;
    }
    if(/^\/start$/.test(msg.text))
      startCommand(bot,msg,localization,dbmaster);
    if(/^\/goida$/.test(msg.text))
      goidaCommand(bot,msg,localization,dbmaster);
    if(/^\/roma$/.test(msg.text))
      romaCommand(bot,msg,localization,dbmaster);
  })
}

const parseInteraction = function(bot,msg,dbmaster){
  dbmaster.users.find({id: msg.from.id}).toArray().then(res => {
    let localization;
    if(res.length == 0 || res[0]['zoomer']){
      localization = zoomer;
    }
    else{
      localization = scoof;
    }
    if(Callbacks.HIBUTTON === msg.data){
      askAge(bot,msg,localization,dbmaster);
    }
    if(msg.data.startsWith(Callbacks.AGE)){
      askCourse(bot,msg,localization,dbmaster);
    }
    if(msg.data.startsWith(Callbacks.COURSE)){
      askCity(bot,msg,localization,dbmaster);
    }
    if(msg.data.startsWith(Callbacks.CITY)){
      askUniversity(bot,msg,localization,dbmaster);
    }
    if(msg.data.startsWith(Callbacks.UNIVERSITY)){
      askSpeciality(bot,msg,localization,dbmaster);
    }
    if(msg.data.startsWith(Callbacks.SPECIALITY)){
      checkData(bot,msg,localization,dbmaster);
    }
    if(msg.data.startsWith(Callbacks.STARTOVER)){
      startOver(bot,msg,localization,dbmaster);
    }
    if(msg.data.startsWith(Callbacks.GOTOVACANCIES)){
      goToVacancies(bot,msg,localization,dbmaster);
    }
  })
}

module.exports = {parseCommand, parseInteraction};
