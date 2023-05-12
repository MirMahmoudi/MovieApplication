const genresService = require('../../BAL/Services/genresService');

const accessingAllGenres = async (req, res) => {
    const genres = await genresService.getAllGenres();
    // todo: movies should be checked before send
    res.send(genres);
}

const accessingGenreById = async (req, res) => {
    const id = req.body.id; // todo: check the value of id
    const genre = await genresService.getGenreById(id);
    // todo: movie should be checked before send
    res.send(genre);
}

const accessingGenreByName = async (req, res) => {
    const genreName = req.body.name; // todo: check the value of name
    const genre = await genresService.getGenreByName(genreName);
    // todo: movie should be checked before send
    res.send(genre);
}

const appendingGenre = async (req, res) => {
    console.log('--------from appendingGenre genre api controller -----------')
    console.log(req.body)
    console.log('--------from genre api controller -----------')
    const genre = req.body.genre; // todo: check the value of genre
    const result = await genresService.addNewGenre(genre);
    // todo: result should be checked before send
    res.send(result);
}

const updatingGenre = async (req, res) => {
    console.log('--------from updatingGenre genre api controller -----------')
    console.log(req.body)
    console.log('--------from genre api controller -----------')
    const genre = req.body.genre; // todo: check the value of genre
    const result = await genresService.editGenre(genre);
    // todo: result should be checked before send
    res.send(result);
}

const deletingGenre = async (req, res) => {
    console.log('--------from deletingGenre genre api controller -----------')
    console.log(req.params.id)
    console.log('--------from genre api controller -----------')
    const id = req.params.id; // todo: check the value of id
    const result = await genresService.removeGenre(id);
    // todo: result should be checked before send
    res.send(result);
}

module.exports = {
    accessingAllGenres,
    accessingGenreById,
    accessingGenreByName,
    appendingGenre,
    updatingGenre,
    deletingGenre
}