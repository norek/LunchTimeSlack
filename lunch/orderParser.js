'use strict'
const messages = require('../messages');
const orderHandler = require('./handlers/orderHandler')

exports.parseOrder = function (orderText) {
    let ordertextArray = orderText.split(" ");

    if (ordertextArray.length <= 1) {
        return messages.commandNotCompleted;
    }

    let subCommand = ordertextArray[2];

    if(subCommand == 'list'){
        
    }else if(subCommand == 'close'){

    }


}