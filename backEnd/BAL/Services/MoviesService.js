const MoviesRepo = require('../../DAL/Repositories/MoviesRepository');

const getAllMovies = async () => {
    const movies = await MoviesRepo.queryAllMovies();
    if (!movies) throw new Error('The request can not be handled', movies);
    return movies; // todo: check the error
}

const getMovieById = async (id) => {
    return await MoviesRepo.queryMovieById(id); // todo: check the error
}

const getMovieByName = async (movieName) => {
    return await MoviesRepo.queryMovieByName(movieName); // todo: check the error
}

const addNewMovie = async (newMovie) => {
    // todo: checking the value of the new Movie
    return await MoviesRepo.createMovie(newMovie);
}

const editMovie = async (movie) => {
    // todo: checking the value of the new Movie
    return await MoviesRepo.updateMovie(movie);
}

const removeMovie = async (id) => {
    return await MoviesRepo.deleteMovie(id);
}

module.exports = {
    getAllMovies,
    getMovieById,
    getMovieByName,
    addNewMovie,
    editMovie,
    removeMovie
}