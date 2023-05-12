const express = require('express');
const genresApiController = require('../ApiControllers/genresApiController');

const genreRouter = express.Router();

genreRouter.get('/api/genres', genresApiController.accessingAllGenres);
genreRouter.get('/api/genres/:id', genresApiController.accessingGenreById);
genreRouter.get('/api/genres/:genreName', genresApiController.accessingGenreByName);
genreRouter.get('/api/genres/newGenre', genresApiController.appendingGenre);
genreRouter.get('/api/genres/editGenre', genresApiController.updatingGenre);
genreRouter.get('/api/genres/delGenre', genresApiController.deletingGenre);

module.exports = genreRouter;