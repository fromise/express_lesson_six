const express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/actors', function(req, res, next) {
  models.actor
    .findAll({include: [{ model: models.film }]})
    .then(actorsFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(actorsFound));
    });
});

router.get('/actors', function(req, res, next) {
  models.actor
    .findAll({ 
      attributes: ['actor_id', 'first_name', 'last_name'],
      include: [{ 
        model: models.film, 
        attributes: ['film_id', 'title', 'description', 'rental_rate', 'rating'] 
      }]      
    })
    .then(actorsFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(actorsFound));
    });
});

module.exports = router;
