const mongoose = require('mongoose');

const {Schema}=mongoose;

const flat = new Schema({
    country:String,
    rentOrSale:String,
    description:{
                    address:{
                        city:String,
                        postCode:String,
                        street:String,
                        flatNumber:String,
                    },
                    title:String,
                    lettingInformation:{
                        price:Number,
                        dataAvailable:String,
                        furnishing:String,
                        lettingType:String,
                        reducedOnWebsite:String,
                        deposit:Number
                    },
                    fullDescription:String
    }
})

const Article= mongoose.model('flat',flat);

module.exports =Article;
