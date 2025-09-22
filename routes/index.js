
const miniApp = require('express').Router();
// Import our modular routers for /tips and /feedback
const movieRouter = require('./movie');
const reviewRouter = require('./review');

//const app = express();

miniApp.use('/movies', movieRouter);
miniApp.use('/reviews', reviewRouter);

module.exports = miniApp;
