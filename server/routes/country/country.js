var express = require('express');
var router = express.Router();
const countryClient=require('../../db-client/country/country');

router.get('/add',(req,res,next)=>{
    res.render('add-country')
});

 
router.get('/edit',(req,res,next)=>{
     cb=(countries)=>{
        console.log(countries[0].order)
        res.render('edit-country',{
            countries
        })
    }
    countryClient.findCounrty({},cb)
});

router.post('/add',(req,res,next)=>{

    cb=()=>{
        res.redirect('/');
    }
    
    countryClient.addCountry(req.body,cb);
})

module.exports=router;