const ObjectId = require('mongodb').ObjectID;
const account = require('../../models/acoounts')

const accountClieng={
    SignUp:(query)=>{
        account.create(query).then(cb);
    }

}

module.exports=accountClieng;