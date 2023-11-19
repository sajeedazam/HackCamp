var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();

var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth')

var app = express();

const uri = process.env.MONGODB_STRING;

mongoose.connect(`${uri}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const corsOptions = {
    origin: "https://localhost:3000",
};
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter)

module.exports = app;
