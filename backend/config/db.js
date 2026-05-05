const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST || "database",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "akash1311",
  database: process.env.DB_NAME || "quizdb"
});

db.connect((err) => {
  if (err) {
    console.log("MySQL connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = db;