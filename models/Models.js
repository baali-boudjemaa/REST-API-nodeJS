'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    uid: String,
    password: String
});
var smsSchema = new Schema({
    message: String,
    suid: String,
    created: Date
});

module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('sms', smsSchema);