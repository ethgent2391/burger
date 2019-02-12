var orm = require("../config/orm.js");
var express = require("express");
var app = express();

var burger = {
  all: function(callback) {
    orm.all('burgers', function(res) {
      callback(res);
    });
  },
  insert: function(value, callback) {
    orm.insert('burgers', "burger_name", value, function(res) {
      callback(res);
    });
  },
  update: function(condition, callback) {
    orm.update('burgers', 'devoured', '1', 'id', condition, function(res) {
      callback(res);
    })
  }

}
module.exports = burger;