const mongoose = require('mongoose');

const {Schema}=mongoose;

const flat = new Schema({
    country:String,
    rentOrBut:String,
    description:{
                    address:{
                        city:String,
                        postCode:String,
                        Street:String,
                        flatNumber:String,
                    },
                    title:String,
                    lettingInformation:{
                        price:Number,
                        dataAvailable:String,
                        furnishing:String,
                        lettingType:String,
                        ReducedOnWebsite:String,
                        Deposiot:Number
                    },
                    fullDescription:String
    }
})

const Article= mongoose.model('flat',flat);

module.exports =Article;