const mongoose = require('mongoose');
const {Schema}= mongoose;

const country = new Schema({
    countryName:String,
    countrySymbol:String
});

const Country = mongoose.model('country',country);

module.exports=Country;