const Genre = require('../Models/Genre');

const queryAllGenres = async () => {
    return await Genre.find(); // todo: check the error
}

const queryGenreById = (id) => {
    Genre.findById(id)
        .then(genre => genre)
        .catch(err => err); // todo: check the error
}

const queryGenreByName = (genreName) => {
    Genre.findOne({ name: genreName})
        .then(genre => genre)
        .catch(err => err); // todo: check the error
}

const createGenre = (genre) => {
    const newGenre = new Genre(genre);
    if (!newGenre) throw new Error(`${genre.name} can not be created. Please check it for valid info.`);

    newGenre.save()
        .then(result => result)
        .catch(err => err); // todo: check the error
}

const updateGenre = (genre) => {
    const editedGenre = new Movie(genre);
    if (!editedGenre) throw new Error(`${genre.name} can not be edited. Please check it for valid info.`);

    Genre.findByIdAndUpdate(genre.id, editedGenre)
        .then( result => result)
        .catch( err => err); // todo: check the error
}

const deleteGenre = (id) => {
    Genre.findByIdAndDelete(id)
        .then(result => result)
        .catch(err => err); // todo: check the error
}

module.exports = {
    queryAllGenres,
    queryGenreById,
    queryGenreByName,
    createGenre,
    updateGenre,
    deleteGenre
}