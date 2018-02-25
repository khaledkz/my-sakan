const express = require('express');
const router =express.Router();
const AuthenticationDb = require('../../../db-client/account/account')

// router.get('/signup',(req,res,next)=>{
//       res.render('add-register-form')
// })

// router.post('/signup',(req,res,next)=>{
//       const query = req.body;
//       cb=()=>{
//             res.redirect('/')
//       }
//       AuthenticationDb.SignUp(query,cb);
// })

router.get('/login',(req,res,next)=>{
      res.render('add-login',{layout:false});
});

router.get('/create-account',(req,res,next)=>{
      res.render('add-create-account',{layout:false});
});



module.exports= router;