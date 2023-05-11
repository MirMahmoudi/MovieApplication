const Movie = require('../Models/Movie');

const queryAllMovies = async () => {
    return await Movie.find();
}

const queryMovieById = async (id) => {
    return await Movie.findById(id);
}

const queryMovieByName = async (movieName) => {
    return await Movie.findOne({ name: movieName});
}

const createMovie = (movie) => {
    const newMovie = new Movie(movie);
    if (!newMovie) throw new Error(`${movie.name} can not be created. Please check it for valid info.`);

    newMovie.save()
        .then(result => result)
        .catch(err => err);
}

const updateMovie = (movie) => {
    const editedMovie = new Movie(movie);
    if (!newMovie) throw new Error(`${movie.name} can not be edited. Please check it for valid info.`);

    Movie.findByIdAndUpdate(movie.id, editedMovie)
        .then( result => result)
        .catch( err => err);
}

const deleteMovie = (id) => {
    Movie.findByIdAndDelete(id)
        .then(result => result)
        .catch(err => err);
}

module.exports = {
    queryAllMovies,
    queryMovieById,
    queryMovieByName,
    createMovie,
    updateMovie,
    deleteMovie
}