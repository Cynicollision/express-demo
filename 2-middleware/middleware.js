const express = require('express');
const morgan = require('morgan');

const app = express();

// configure middleware
// app.use(morgan('dev')) // concise
app.use(morgan('combined')) // verbose

// configure a default GET route
app.get('/', (req, res) => { 
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});