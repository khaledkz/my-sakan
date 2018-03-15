const mongoose = require('mongoose');
const { Schema } = mongoose;

const account = new Schema({
    username: String,
    password: String,
    facebookid: String,
    firstName: String,
    lastName: String,
    profileImage: String,
    coverImage: String,
    dateOfBirth: {
        month:Number,
        day:Number,
        year:Number
    },
    status: String,
    star: Number,
    country: String,
    phoneNumber:Number,
    emailAddress:String


});

const Account = mongoose.model('account', account);

module.exports = Account;