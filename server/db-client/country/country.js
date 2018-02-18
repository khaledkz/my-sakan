const Country =require('../../models/Country');
require('../connection')

const addCountry =(query,cb)=>{
    Country.create(query).then(cb);
};

const findCounrty=(query,cb)=>{
    Country.find(query).then(cb);
}

module.exports={addCountry,findCounrty};