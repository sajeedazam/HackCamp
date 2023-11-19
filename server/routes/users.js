var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_KEY;

mongoose.connect(`${uri}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;