const express = require('express');
const router = express.Router();
const {ObjectId}=require('mongodb');
const userClient = require('../../../db-client/account/account')


// we can try to get user and password from user
router.get('/:userId',(req,res,next)=>{
    const {userId} =req.params;

    cb = (user)=>{
        res.json(user)
    }

    userClient.getSingleUser(userId,cb)

});


module.exports =router;