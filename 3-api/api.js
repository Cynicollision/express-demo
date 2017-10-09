const express = require('express');
const morgan = require('morgan');

const app = express();

// configure middleware
app.use(morgan('dev'));

// configure routes

// simple POST
app.post('/api/test', (req, res) => {
  res.send(200, 'Hello from /test !');
});

// POST with URL parameters (TODO: body)
app.post('/api/foo/:id/:otherParam', (req, res) => {
  var id = req.params.id;
  var otherParam = req.params.otherParam;

  res.send(200);
});

// GET with query
app.get('/api/getstuff', (req, res) => {
  var name = req.query.name;

  res.send(200, `Getting stuff with the name: ${name}`);
});


app.listen(3000, () => {
  console.log('Listening on port 3000');
});