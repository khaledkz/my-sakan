const Flat= require('../../models/Flat')
require('../connection')

const createFlat =(query,cb)=>{
    Flat.create(query).then(cb);
}

const findFlats=(query,cb)=>{
    Flat.find()
}

module.exports={createFlat};
