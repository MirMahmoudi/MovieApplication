const express = require('express');
const moviesRouter = require('./PresentationLayer/Routers/moviesRouter');
const genresRouter = require('./PresentationLayer/Routers/genreRouter');
require('./DAL/mongoose');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(moviesRouter, genresRouter);

const port = 2023;
app.listen(port, (err, result) => {
    if(err) throw new Error(`app can not connect to port:${port}`);
    console.log(`app connected to prot:${port}...`)
});