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

router.get('/delete/:userID',(req,res)=>{
    let {userID} = req.params;

    let  cb=(data)=>{
        res.redirect('/users')
    }
   
   accounts.deleteSingleUser(userID,cb)


})

module.exports = router;