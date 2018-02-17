const mongoose = require('mongoose');

const {Schema}=mongoose;

const flat = new Schema({
    title:String,
    price:Number,
    buyOrRent:String,
    country:String,
    fullAddress:String,
    lettingInformation:{
        dataAvailable:String,
        furnishing:String,
        ReducedOnWebsite:String,
        Deposiot:Number
    },
    fullDescription:String,
    agencyDetails:{
        img:String,
        name:String,
        phoneNumber:Number,
        address:String
    }
    
})

const Article= mongoose.model('flat',flat);

module.exports =Article;