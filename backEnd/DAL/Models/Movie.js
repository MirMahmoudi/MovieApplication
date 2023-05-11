const mongoose = require('mongoose');
const Genre = require('./Genre');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The movie should have a name.'],
        lowercase: true,
        minLength: [3, 'Movie name should be more than 3 characters.'],
        maxLength: [100, 'Movie name should be more than 100 characters.'],
        trim: true
    },
    genreId: {
        type: Schema.Types.ObjectId,
        ref: Genre
    }
}, {timestamps: true});

module.exports = mongoose.model('Movie', movieSchema);