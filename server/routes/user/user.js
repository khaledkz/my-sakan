const express = require('express');
const router = express.Router();
const accounts=require('../../db-client/account/account')
const CountriesJson = require('../../data/countries.json');
const yearsJson=require('../../data/years.json')
const monthsJson=require('../../data/month.json');

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

router.get('/update/:userID',(req,res)=>{
    let {userID} = req.params;

     cb=(data)=>{
        res.render('userlist-update-single-user',{
            user:data,
            yearsJson,
            monthsJson,
            CountriesJson
        })
    }
    
    accounts.getSingleUser(userID,cb)
})


router.post('/update/:userId',(req,res)=>{
    let {userId} = req.params;
    let query = req.body;

    let count=query.country.split(" ");
 
      query.country={
            code:count[0],
            name:count[1]
      }

      query.image={
          cover:query.coverImage,
          profile:query.profileImage
      }
      
    query.dateOfBirth={
        day:query.day,
        month:query.month,
        year:query.year
    }
 
     cb=()=>{
         console.log(2)
        res.redirect('/users')
    }
    
    accounts.updateSingleUser(userId,query,cb)
})

 
module.exports = router;