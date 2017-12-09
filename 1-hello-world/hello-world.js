// load the dependency
var express = require('express');

// create the Express application
var app = express();

// configure a default GET route
app.get('/', (req, res) => { 
    res.send('Hello World!');
});

// start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});