const ObjectId = require('mongodb').ObjectID;

const Country =require('../../models/Country');
require('../connection')

const addCountry =(query,cb)=>{
    Country.create(query).then(cb);
};

const findCounrty=(query,cb)=>{
    Country.find(query).then(cb);
}

const findSingleCountry=(country,cb)=>{
    // Country.findById({'id':ObjectId(country)}).then(cb);
    Country.findById(country).then(cb);

}

module.exports={addCountry,findCounrty,findSingleCountry};