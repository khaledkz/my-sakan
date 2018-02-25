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

// passport.use(new LocalStrategy(
//       function(username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//           if (err) { return done(err); }
//           if (!user) {
//             return done(null, false, { message: 'Incorrect username.' });
//           }
//           if (!user.validPassword(password)) {
//             return done(null, false, { message: 'Incorrect password.' });
//           }
//           return done(null, user);
//         });
//        }
// ));

// passport.serializeUser(function(user, done) {
//       done(null, user.id);
// });
    
// passport.deserializeUser(function(id, done) {
//       User.findById(id, function(err, user) {
//         done(err, user);
//       });
// });


router.get('/login',(req,res,next)=>{
      res.render('add-login',{layout:false});
});

router.get('/create-account',(req,res,next)=>{
      res.render('add-create-account',{layout:false});
});

module.exports= router;