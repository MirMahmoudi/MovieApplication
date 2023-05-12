const express = require('express');
const moviesApiController = require('../ApiControllers/moviesApiController');

const moviesApiRouter = express.Router();

moviesApiRouter.get('/api/movies', moviesApiController.accessingAllMovies);
moviesApiRouter.get('/api/movies/:id', moviesApiController.accessingMovieById);
moviesApiRouter.get('/api/movies/:movieName', moviesApiController.accessingMovieByName);
moviesApiRouter.post('/api/movies/newMovie', moviesApiController.appendingMovie);
moviesApiRouter.put('/api/movies/editMovie', moviesApiController.updatingMovie);
moviesApiRouter.delete('/api/movies/delMovie/:id', moviesApiController.deletingMovie);

module.exports = moviesApiRouter;