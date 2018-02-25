const ObjectId = require('mongodb').ObjectID;
const account = require('../../models/acoounts')

const accountClient={
    saveUser:(query)=>{
        account.create(query).then(cb);
    },
    findUser:(user,cb)=>{
        const query={username:user}
        account.findOne(query,cb)
    },
    findSingleUser:(user,cb)=>{
        account.findById(user,cb);
    }
}

module.exports=accountClient;