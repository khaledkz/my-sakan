const Flat= require('../../models/Flat')
require('../connection')

const createFlat =(query,cb)=>{
    Flat.create(query).then(cb);
}

module.exports={createFlat};