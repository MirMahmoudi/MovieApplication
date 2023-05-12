const moviesService = require('../../BAL/Services/moviesService');

const accessingAllMovies = async (req, res) => {
    const movies = await moviesService.getAllMovies();
    // todo: movies should be checked before send
    res.send(movies);
}

const accessingMovieById = async (req, res) => {
    const id = req.body.id; // todo: check the value of id
    const movie = await moviesService.getMovieById(id);
    // todo: movie should be checked before send
    res.send(movie);
}

const accessingMovieByName = async (req, res) => {
    const movieName = req.body.name; // todo: check the value of name
    const movie = await moviesService.getMovieByName(movieName);
    // todo: movie should be checked before send
    res.send(movie);
}

const appendingMovie = async (req, res) => {
    console.log('--------from appendingMovie movie api controller -----------')
    console.log(req.body)
    console.log('--------from movie api controller -----------')
    const movie = req.body.movie; // todo: check the value of movie
    const result = await moviesService.addNewMovie(movie);
    // todo: result should be checked before send
    res.send(result);
}

const updatingMovie = async (req, res) => {
    console.log('--------from updatingMovie movie api controller -----------')
    console.log(req.body)
    console.log('--------from movie api controller -----------')
    const movie = req.body.movie; // todo: check the value of movie
    const result = await moviesService.editMovie(movie);
    // todo: result should be checked before send
    res.send(result);
}

const deletingMovie = async (req, res) => {
    console.log('--------from deletingMovie movie api controller -----------')
    console.log(req.params.id)
    console.log('--------from movie api controller -----------')
    const id = req.params.id; // todo: check the value of id
    const result = await moviesService.removeMovie(id);
    // todo: result should be checked before send
    res.send(result);
}

module.exports = {
    accessingAllMovies,
    accessingMovieById,
    accessingMovieByName,
    appendingMovie,
    updatingMovie,
    deletingMovie
}