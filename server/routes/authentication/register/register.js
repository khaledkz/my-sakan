const express = require('express');
const router = express.Router();
const AuthenticationDb = require('../../../db-client/account/account');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(

      (username, password, done) => {

            cb = (err, user) => {
                  if (err) { return done(err); }
                  if (!user) {
                        return done(null, false, { message: 'Incorrect username.' });
                  }
                  if (!user.validPassword(password)) {
                        return done(null, false, { message: 'Incorrect password.' });
                  }
                  return done(null, user);
            }

            AuthenticationDb.findUser(username, cb);
      }
));

passport.serializeUser(function (user, done) {
      done(null, user.id);
});

passport.deserializeUser((id, done) => {

      cb = (err, user) => {
            done(err, user);
      }
      AuthenticationDb.findSingleUser(id, cb);

});


router.get('/login', (req, res, next) => {
      res.render('add-login', { layout: false });
});

router.get('/create-account', (req, res, next) => {
      res.render('add-create-account', { layout: false });
});

router.post('/login',
      passport.authenticate('local', { 
            successRedirect: '/',failureRedirect: '/login',failureFlash: true  })    
);

router.post('/create-account', (req, res, next) => {
      const query=req.body;

      cb=()=>{
            res.redirect('/');
      }

      AuthenticationDb.saveUser(query,cb); 

})

module.exports = router;