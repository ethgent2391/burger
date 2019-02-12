var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var bodyParser = require('body-parser');
var connection = require('../config/connection.js');

router.get("/", function(req, res) {
  burger.all(function(data) {

    res.render("index", {
      burgers: data
    });
  });
});


router.post("/", function(req, res) {
  burger.insert(req.body.burger_name, function() {
    res.redirect("/");
  });
});


router.put("/:id", function(req, res) {
  burger.update(req.params.id, function() {
    res.redirect("/");
  });
});

module.exports = router;