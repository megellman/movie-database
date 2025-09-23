const express = require('express');
const router = express.Router();

const movies = require('./movies.js');
const reviews = require('./reviews.js');

router.use('/movies', movies);
router.use('/reviews', reviews);



module.exports = router;