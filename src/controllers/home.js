  var express  = require('express'),
      Home     = express.Router(),
      User     = require('../models/user');
      mongoose = require('mongoose');
      fs       = require('fs')

Home.route('/scores')
  .get(function(req, res, next) {
    res.redirect('/');
  })

  .post(function(req, res, next) {
    console.log(req.body);
    User.create({
      
      name: req.body.name,
      score: req.body.score
    }, function (error, user) {
      if (error) {
        console.log(error)
      } else {
        console.log('--------user object-----------')
        console.log(user)
        res.redirect('/')
      }
    })

  })


Home.route('/')
  .get(function(req, res, next) {
    res.render('home')
  });

module.exports = Home;
