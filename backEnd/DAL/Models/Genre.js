const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The movie should have a name.'],
        lowercase: true,
        minLength: [3, 'Movie name should be more than 3 characters.'],
        maxLength: [100, 'Movie name should be more than 100 characters.'],
        trim: true
    }
},{timestamps: true});

module.exports = mongoose.model('Genre', genreSchema);