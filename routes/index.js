const express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put("/actors/:id", function (req, res, next) {
  let actorId = parseInt(req.params.id);
  models.actor
    .update(req.body, { where: { actor_id: actorId } })
    .then(result => res.redirect('/actors/' + actorId))
    .catch(err => {
      res.status(400);
      res.send("There was a problem updating the actor.  Please check the actor information.");
    });
});
module.exports = router;
