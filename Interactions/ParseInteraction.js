const Callbacks = require("../Enums/Callbacks.js");

const startCommand = require("./StartCommand.js");
const goidaCommand = require("./GoidaCommand.js")

const {askAge,askCourse,askTown,askUniversity,askSpeciality} = require("./DataAskInteraction.js"); 

const parseCommand = function (bot,msg,localization) {
  if(/^\/start$/.test(msg.text))
    startCommand(bot,msg,localization);
  if(/^\/goida$/.test(msg.text))
    goidaCommand(bot,msg,localization);

}

const parseInteraction = function(bot,msg,localization){
  if(Callbacks.HIBUTTON === msg.data){
     
  }
}

module.exports = {parseCommand, parseInteraction};
