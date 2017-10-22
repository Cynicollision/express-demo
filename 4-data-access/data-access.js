const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// define a model
const BlogPost = mongoose.model('BlogPost', mongoose.Schema({
  title: { type: String },
  content: { type: String },
  postedOn: Date,
}));

// configure middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// configure routes
app.post('/api/posts', (req, res) => {
  let blogPostData = req.body;

  BlogPost.create(blogPostData, (err, blogPost) => {

    if (err) {
      res.send(500, err);
    }
    else {
      res.send(201);
    }
  });
});

app.get('/api/posts', (req, res) => {

  BlogPost.find({}, (err, posts) => {

    if (err) {
      res.send(500, err);
    }
    else {
      res.send(200, posts);
    }
  });
});

app.get('/api/posts/:id', (req, res) => {

  BlogPost.find({ _id: req.params.id }, (err, posts) => {
    
    if (err) {
        res.send(500, err);
    }
    else {
      res.send(200, posts);
    }
  });
});

// connect to mongoDB
mongoose.connect('mongodb://dummy:hAcKm3@localhost:27017/demo', { useMongoClient: true });
mongoose.connection.once('open', () => {
  console.log('Connected to "demo" db');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
