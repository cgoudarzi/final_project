  var express  = require('express'),
      Home     = express.Router(),
      User     = require('../models/user');
      mongoose = require('mongoose');
      fs       = require('fs')


Home.route('/scores')
  .get(function(req, res, next) {
    User.find({}, function(err, users) {
      var scores = users;
      res.send(scores)
    });
  })

  .post(function(req, res, next) {
    console.log(req.body.username);
    console.log(req.body.score)
    User.create({
      
      name: req.body.username,
      score: req.body.score
    }, 
    function (error, user) {
      if (error) {
        console.log(error)
      } else {
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
