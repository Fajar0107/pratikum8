const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbpratikum8",   // <- samakan dengan nama di phpMyAdmin
});

module.exports = pool;
