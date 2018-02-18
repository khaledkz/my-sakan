const Country =require('../../models/Country');
require('../connection')

const addCountry =(query,cb)=>{
    Country.create(query).then(cb);
};

module.exports={addCountry};