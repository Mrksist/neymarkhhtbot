const Callbacks = require("../Enums/Callbacks.js");

const startCommand = require("./StartCommand.js");
const goidaCommand = require("./GoidaCommand.js")

const {askAge,askCourse,askCity,askUniversity,askSpeciality} = require("./DataAskInteraction.js"); 

const parseCommand = function (bot,msg,localization) {
  if(/^\/start$/.test(msg.text))
    startCommand(bot,msg,localization);
  if(/^\/goida$/.test(msg.text))
    goidaCommand(bot,msg,localization);

}

const parseInteraction = function(bot,msg,localization){
  if(Callbacks.HIBUTTON === msg.data){
    askAge(bot,msg,localization);
  }
  if(msg.data.startsWith(Callbacks.AGE)){
    askCourse(bot,msg,localization);
  }
  if(msg.data.startsWith(Callbacks.COURSE)){
    askCity(bot,msg,localization);
  }
  if(msg.data.startsWith(Callbacks.CITY)){
    askUniversity(bot,msg,localization);
  }
  if(msg.data.startsWith(Callbacks.UNIVERSITY)){
    askSpeciality(bot,msg,localization);
  }
}

module.exports = {parseCommand, parseInteraction};
