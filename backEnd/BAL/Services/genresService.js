const genresRepo = require('../../DAL/Repositories/genresRepository');

const getAllGenres = async () => {
    const genres = await genresRepo.deleteGenre();
    if (!genres) throw new Error('The request can not be handled', genres);
    return genres; // todo: check the error
}

const getGenreById = async (id) => {
    return await genresRepo.queryGenreById(id); // todo: check the error
}

const getGenreByName = async (genreName) => {
    return await genresRepo.queryGenreByName(genreName); // todo: check the error
}

const addNewGenre = async (newGenre) => {
    // todo: checking the value of the new Movie
    return await genresRepo.createGenre(newGenre);
}

const editGenre = async (genre) => {
    // todo: checking the value of the new Movie
    return await genresRepo.updateGenre(movie);
}

const removeGenre = async (id) => {
    return await genresRepo.deleteGenre(id);
}

module.exports = {
    getAllGenres,
    getGenreById,
    getGenreByName,
    addNewGenre,
    editGenre,
    removeGenre
}