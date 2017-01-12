'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello world')
});

app.post('/test',(req,res) => {

    let text = req.body.text;

    if(text == 'error'){
        res.send("error message");
    }

    let returnValue = {
        response_type: 'in_channel',
        text: 'to jest to!'        
    };

    res.json(returnValue);

    console.log(text);

});


app.get('/help', function (req, res) {
  res.send('help from hello world')
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
