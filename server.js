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
  if (err) {
    console.error("Database connection error" + err);
    return;
  }
  console.log('Database connected');
})

// POST add movie
app.post('/api/add-movie', async (req, res) => {
  const movieName = req.body.movieName;
  db.query('INSERT INTO movies (movie_name) VALUES (?)', [movieName], async (err, result) => {
    if (err) {
      console.error("Error adding movie", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({
      message: "Movie added successfully",
      result
    })
  })
})

// GET all movies
app.get('/api/movies', async (req, res) => {
  db.query('SELECT * FROM movies', (err, result) => {
    if (err) {
      console.error("Error getting movies", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({
      message: "Movies received successfully"
    });
  })
})

// DELETE a movie
app.delete('/api/movie/:id', async (req, res) => {
  db.query('DELETE FROM movies WHERE id = ?', [req.params.id], (err, result) => {
    if (err) {
      console.error("Error deleting movie", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ message: "Movie deleted successfully" });
  })
})

// GET all movie reviews
app.get('/api/movie-reviews', async (req, res) => {
  db.query('SELECT movies.movie_name, reviews.review FROM movies INNER JOIN reviews ON movies.id = reviews.movie_id ORDER BY movies.movie_name', (err, results) => {
    if (err) {
      console.error("Error with database: ", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json({
      message: "Movie review received successfully",
      results
    });
  })
})

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
