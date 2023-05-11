const mongoose = require('mongoose');

const db = 'mongodb://127.0.0.1:27017/MovieDB';

mongoose.connect(db)
    .then( () => console.log('app connected to db ...'))
    .catch( err => console.log(err));