var mysql = require('mysql');
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "burgers_db"
});