const Movie = require('../Models/Movie');

const queryAllMovies = async () => {
    return await Movie.find(); // todo: check the error
}

const queryMovieById = (id) => {
    Movie.findById(id)
        .then(movie => movie)
        .catch(err => err); // todo: check the error
}

const queryMovieByName = (movieName) => {
    Movie.findOne({ name: movieName})
        .then(movie => movie)
        .catch(err => err); // todo: check the error
}

const createMovie = (movie) => {
    const newMovie = new Movie(movie);
    if (!newMovie) throw new Error(`${movie.name} can not be created. Please check it for valid info.`);

    newMovie.save()
        .then(result => result)
        .catch(err => err); // todo: check the error
}

const updateMovie = (movie) => {
    const editedMovie = new Movie(movie);
    if (!newMovie) throw new Error(`${movie.name} can not be edited. Please check it for valid info.`);

    Movie.findByIdAndUpdate(movie.id, editedMovie)
        .then( result => result)
        .catch( err => err); // todo: check the error
}

const deleteMovie = (id) => {
    Movie.findByIdAndDelete(id)
        .then(result => result)
        .catch(err => err); // todo: check the error
}

module.exports = {
    queryAllMovies,
    queryMovieById,
    queryMovieByName,
    createMovie,
    updateMovie,
    deleteMovie
}