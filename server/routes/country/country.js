var express = require('express');
var router = express.Router();

router.get('/add',(req,res,next)=>{
    res.render('add-country')
});

router.get('/edit',(req,res,next)=>{
    res.render('edit-country')
});

module.exports=router;