const express = require('express');
const morgan = require('morgan');

const app = express();

// configure middleware
// app.use(morgan('dev')) // concise
app.use(morgan('combined')) // verbose

// custom middleware to prevent caching of GET requests
//  (TODO: confirm this is all needed/accurate)
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

app.listen(3000, () => {
  console.log('Listening on port 3000');
});