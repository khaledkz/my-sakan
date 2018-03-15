const express = require('express');
const router = express.Router();
const accounts=require('../../db-client/account/account')

router.get('/',(req,res)=>{
    let cb=(users)=>{
        
        res.render('userList',{
            users
        })
    }
    accounts.findAllUsers(cb)
});

router.get('/view/:userId',(req,res)=>{
    let {userId} = req.params;

    let  cb=(data)=>{

         res.render('userlist-SingleUser',{
            user:data
        })
    }
    
    accounts.getSingleUser(userId,cb)

})
module.exports = router;