const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const index = require('./routes/index');
const users = require('./routes/users');
const flat= require('./routes/flat/flat');
const country= require('./routes/country/country');
const countryApi=require('./routes/api/countries/countries');
const flatApi =require('./routes/api/flat/flat');
const register = require('./routes/authentication/register/register');
const session = require("express-session");

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//use session and initalize passpost and session
 app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/users', users);
app.use('/flat',flat);
app.use('/country',country);
app.use('/api/countries',countryApi)
app.use('/api/flat',flatApi)
app.use('/',register)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;