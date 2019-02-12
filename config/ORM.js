var connection = require('./connection.js');

var orm = {

  all: function(tableName, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) {
        console.log(err);
      } else {
        callback(result);
      }
    })
  },
  insert: function(tableName, column, value, callback) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableName, column, value], function(err, result) {
      if (err) {
        console.log(err);
      } else {
        callback(result);
      }
    })
  },
  update: function(tableName, colVal, boolean, colName, condition, callback) {
    var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
    connection.query(queryString, [tableName, colVal, boolean, colName, condition], function(err, result) {
      if (err) {
        console.log(err);
      } else {
        callback(result);
      }
    })
  }
}

module.exports = orm;