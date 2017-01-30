'use strict';

const notFoundCommand = require('./commands/notFoundCommand.js');
const helpCommand = require('./commands/helpCommand.js');
const aboutCommand = require('./commands/aboutCommand.js');
const orderCommandListCommand = require('./commands/order/orderCommandListCommand.js');
const orderBeginCommand = require('./commands/order/orderBeginCommand.js');
const orderEndsCommand = require('./commands/order/orderEndsCommand.js');

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
    }else if(commandText === 'order begin'){
        return orderBeginCommand;
    }else if(commandText === 'order end'){
        return orderEndsCommand;
    }

    return notFoundCommand;
}