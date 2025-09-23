require('@dotenvx/dotenvx').config();
// Import and require mysql2
const mysql = require('mysql2');

let db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'movies_db'
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error" + err);
    return;
  }
  console.log('Database connected');
})

module.exports = db;