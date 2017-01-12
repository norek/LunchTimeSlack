'use strict';
const messages = require('../messages.js');
const command = require('./slackresponse.js');
const orderParser = require('./orderParser.js');

exports.parse = function(text){
    
    let responseText = '';

    if(text == 'about'){
        responseText = command.about();
    }else if(text == 'help'){
        responseText = command.help();
    }else if(text.include('order')){
        responseText = command.order(text);
    }
    else{
        responseText = command.unknownCommand();
    }
}