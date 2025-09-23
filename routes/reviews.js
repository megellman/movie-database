const express = require('express');
const router = express.Router();
const db = require('../db.js');

// GET all movie reviews
router.get('/', async (req, res) => {
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

// PUT update a review
router.put('/:id', async(req, res) => {
  const review = req.body.review;
  const id = req.params.id;
  db.query('UPDATE reviews SET review = ? WHERE id = ?', [review, id], (err, results) => {
    if(err){
      console.error("Error with database: ", err);
      return res.status(500).json({message: "Database error"});
    }
    res.status(200).json({
      message: "Review updated successfully",
      update: {
        review: review,
        id: id
      }
    });
  })
})

module.exports = router;