var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');
const db = require('./config')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const passport = require('passport')
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
require('./passport')(passport);
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
