const express = require('express');
const router = express.Router();
const db = require('../db.js');

// GET all movies
router.get('/', async (req, res) => {
    db.query('SELECT * FROM movies', (err, result) => {
        if (err) {
            console.error("Error getting movies", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(200).json({
            message: "All movies pulled",
            result
        });
    })
})

// POST add movie
router.post('/', async (req, res) => {
    const movieName = req.body.movieName;
    db.query('INSERT INTO movies (movie_name) VALUES (?)', [movieName], async (err, result) => {
        if (err) {
            console.error("Error adding movie", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(200).json({
            message: "Movie successfully added",
            movie: {
                id: result.insertId,
                name: movieName,
            }
        })
    })
})

// DELETE a movie
router.delete('/:id', async (req, res) => {
    const movieId = req.params.id;
    db.query('DELETE FROM movies WHERE id = ?', [movieId], (err, result) => {
        if (err) {
            console.error("Error deleting movie", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(200).json({
            message: "Movie deleted successfully"
        });
    })
})

module.exports = router;