const express = require('express');
const router =express.Router();

router.get('/signup',(req,res,next)=>{
      res.render('add-register-form')
})

module.exports= router;