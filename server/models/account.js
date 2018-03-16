const mongoose = require('mongoose');
const { Schema } = mongoose;

const account = new Schema({
    username: String,
    password: String,
    facebookid: String,
    firstName: String,
    lastName: String,
    image:{
        profile:String,
        cover:String
    },
    dateOfBirth: {
        month:String,
        day:Number,
        year:Number
    },
    status: String,
    star: Number,
    country: {
        code:String,
        name:String
    },
    phoneNumber:Number,
    emailAddress:String,
  
});

const Account = mongoose.model('account', account);

module.exports = Account;