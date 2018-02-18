const Flat= require('../../models/Flat')
require('../connection')

const createFlat =(query,cb)=>{
    Flat.create(query).then(cb);
}

const findFlats=(query,cb)=>{
    Flat.find(query).then(cb)
}

const singleFlat=(flatId,cb)=>{
    Flat.findById(flatId).then(cb);
}

module.exports={createFlat,findFlats,singleFlat};
