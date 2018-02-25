
const ObjectId = require('mongodb').ObjectID;
const account = require('../../models/acoounts')
const bcrypt = require('bcrypt');

const accountClient={
    saveUser:(query)=>{
         const saltRounds=10;
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(query.password, salt, function(err, hash) {
                // Store hash in your password DB.
                query.password=hash;
                 account.create(query,cb);

            });
        });

    },
    findUser:(user,cb)=>{
        const query={username:user}
        account.findOne(query,cb)
    },
    findSingleUser:(user,cb)=>{
        account.findById(user,cb);
    },
    comparePassword:(firstPassword,secondPassword,callback)=>{
        cb=(err,isMatch)=>{
            if (err) throw err;
             callback(null,isMatch)
        }
        bcrypt.compare(firstPassword,secondPassword,(cb));
    }
}

module.exports=accountClient;