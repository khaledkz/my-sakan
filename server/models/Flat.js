const mongoose = require('mongoose');

const {Schema}=mongoose;

const flat = new Schema({
    title:String,
    price:Number,
    buyOrRent:String,
    country:String,
})

const Article= mongoose.model('flat',flat);

module.exports =Article;