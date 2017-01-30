'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const parser = require('./lunch/parser.js');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('port', (process.env.PORT || 5000));

// mongoose.connect('mongodb://localhost/lunchtime');

app.get('/', function (req, res) {
  res.send('Hello world v2')
});

app.get('/api/', function (req, res) {
  res.sendStatus(200);
});



app.post('/api/lunch',(req,res) => {

    let text = req.body.text;
    let responseText = parser.parse(text);

    let returnValue = {
        response_type: 'in_channel',
        text: responseText        
    };

    res.json(returnValue);
    console.log(text);
    

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
