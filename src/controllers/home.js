  var express  = require('express'),
    Home       = express.Router();


Home.route('/')
  .get(function(req, res, next) {
    res.render('home')
  });
module.exports = Home;
