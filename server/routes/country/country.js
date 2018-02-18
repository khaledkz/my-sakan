var express = require('express');
var router = express.Router();
const countryClient=require('../../db-client/country/country');

router.get('/add',(req,res,next)=>{
    res.render('add-country')
});

router.get('/edit',(req,res,next)=>{
    res.render('edit-country')
});

router.post('/add',(req,res,next)=>{

    cb=()=>{
        res.redirect('/');
    }
    
    countryClient.addCountry(req.body,cb);
})

module.exports=router;