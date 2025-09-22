require('@dotenvx/dotenvx').config();
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const api = require('./routes/index')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Modular Routes
app.use('/api', api);

let db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'movies_db'
});

db.connect((err) => {
  if(err) {
    console.error("Database connection error" + err);
    return;
  }
  console.log('Database connected');
})

// POST add movie
app.post('/api/add-movie', async(req, res) => {
  const movieName = req.body.movieName;
  db.query('INSERT INTO movies (movie_name) VALUES (?)', [movieName], async(err, result) => {
    if(err){
      console.log(err);
    }
    console.log(result)
  })
})

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
