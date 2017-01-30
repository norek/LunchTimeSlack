'use strict';
const messages = require('../messages.js');
const command = require('./slackresponse.js');
const orderParser = require('./orderParser.js');
// const parseResultType = require('./parserResultType.js');

const notFoundCommand = require('./commands/notFoundCommand.js');
const helpCommand = require('./commands/helpCommand.js');
const aboutCommand = require('./commands/aboutCommand.js');
const orderCommandListCommand = require('./commands/order/orderCommandListCommand.js');

exports.parse = function (text) {

    if(text === undefined || text === null){
        text = '';
    }

    let commandText = text.toLowerCase();

    if(commandText.indexOf('help') == 0){
        return helpCommand;
    }else if(commandText === 'about'){
        return aboutCommand;
    }else if(commandText == 'order'){
        return orderCommandListCommand;
    }

    return notFoundCommand;
}