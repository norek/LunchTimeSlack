'use strict'
const mongoose = require('mongoose');

var Order = new Schema({
  ClientName: { type: String },
  ClientId: { type: Number },
  Description: { type: String },
  date: { type: Date, default: Date.now }
});

exports.Order = function(){
    return mongoose.model('Order');
}