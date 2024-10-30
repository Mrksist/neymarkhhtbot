const startCommand = require("./StartCommand.js");
const goidaCommand = require("./GoidaCommand.js")

const parseInteraction = function (bot,msg,localization) {
  if(/^\/start$/.test(msg.text))
    startCommand(bot,msg,localization);
  if(/^\/goida$/.test(msg.text))
    goidaCommand(bot,msg,localization);
}

module.exports = parseInteraction;
