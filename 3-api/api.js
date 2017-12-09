const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// configure middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// configure routes

// simple POST
app.post('/api/test', (req, res) => {
    res.send(200, 'Hello from /test !');
});

// GET with query
app.get('/api/getstuff', (req, res) => {
    var name = req.query.name;

    res.send(200, `Getting stuff with the name: ${name}`);
});

// POST with URL parameters and a body
app.post('/api/foo/:id/:otherParam', (req, res) => {

    var response = {
        id: req.params.id,
        otherParam: req.params.otherParam,
        body: req.body, // req.body is defined by body-parser middleware
    };

    res.send(200, response);
});

// start the server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
