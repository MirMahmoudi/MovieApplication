const express = require('express');
const router = require('./router');
require('./DAL/mongoose');

const app = express();
app.use(router);

const port = 2023;
app.listen(port, (err, result) => {
    if(err) throw new Error(`app can not connect to port:${port}`);
    console.log(`app connected to prot:${port}...`)
});