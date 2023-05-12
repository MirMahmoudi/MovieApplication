const express = require('express');
const moviesApiController = require('../ApiControllers/moviesApiController');

const moviesRouter = express.Router();

moviesRouter.get('/api/movies', moviesApiController.accessingAllMovies);
moviesRouter.get('/api/movies/:id', moviesApiController.accessingMovieById);
moviesRouter.get('/api/movies/:movieName', moviesApiController.accessingMovieByName);
moviesRouter.post('/api/movies/newMovie', moviesApiController.appendingMovie);
moviesRouter.put('/api/movies/editMovie', moviesApiController.updatingMovie);
moviesRouter.delete('/api/movies/delMovie/:id', moviesApiController.deletingMovie);

module.exports = moviesRouter;