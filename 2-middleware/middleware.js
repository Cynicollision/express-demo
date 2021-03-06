var express = require('express');
var morgan = require('morgan');

var app = express();

// configure middleware
// app.use(morgan('dev')) // concise
app.use(morgan('combined')) // verbose

// custom middleware to prevent caching of GET requests
app.use(function noCache(req, res, next) {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', 0);

    next();
});

// configure a default GET route
app.get('/', (req, res) => { 
    res.send('Hello World!');
});

// start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
