const moviesRepo = require('../../DAL/Repositories/moviesRepository');

const getAllMovies = async () => {
    const movies = await moviesRepo.queryAllMovies();
    if (!movies) throw new Error('The request can not be handled', movies);
    return movies; // todo: check the error
}

const getMovieById = async (id) => {
    return await moviesRepo.queryMovieById(id); // todo: check the error
}

const getMovieByName = async (movieName) => {
    return await moviesRepo.queryMovieByName(movieName); // todo: check the error
}

const addNewMovie = async (newMovie) => {
    // todo: checking the value of the new Movie
    return await moviesRepo.createMovie(newMovie);
}

const editMovie = async (movie) => {
    // todo: checking the value of the new Movie
    return await moviesRepo.updateMovie(movie);
}

const removeMovie = async (id) => {
    return await moviesRepo.deleteMovie(id);
}

module.exports = {
    getAllMovies,
    getMovieById,
    getMovieByName,
    addNewMovie,
    editMovie,
    removeMovie
}