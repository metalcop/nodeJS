var mysql = require('mysql');
var db = mysql.createConnection(
  {
    host:'localhost',
    user:'nodejs',
    password:'My*Cop2105/QL',
    database:'opentutorials'
  }
);

db.connect();
module.exports = db;
