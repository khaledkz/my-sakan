const ObjectId = require('mongodb').ObjectID;
const account = require('../../models/acoounts')

const accountClient={
    SignUp:(query)=>{
        account.create(query).then(cb);
    },
    findUser:(user,cb)=>{
        account.findOne({username:user}).then(cb)
    },
    findSingleUser:(user,cb)=>{
        account.findById(user).then(cb);
    }
}

module.exports=accountClient;