const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// configure middleware
app.use(morgan('dev'));

// configure view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// configure routes
app.get('*/post/:id', function (req, res) {

  BlogPost.findById(req.params.id, (err, post) => {

    if (err) {
      res.send(500, err);
    }
    else {
      res.render('post', { currentPost: post });
    }
  });
});

app.get('*', function (req, res) {
    
  BlogPost.find({}, (err, posts) => {

    if (err) {
      res.send(500, err);
    }
    else {
      res.render('index', { blogPosts: posts });
    }
  });
});

// define a model
const BlogPost = mongoose.model('BlogPost', mongoose.Schema({
  title: { type: String },
  content: { type: String },
  postedOn: Date,
}));

// connect to mongoDB
mongoose.connect('mongodb://dummy:hAcKm3@localhost:27017/demo', { useMongoClient: true });
mongoose.connection.once('open', () => {
  console.log('Connected to "demo" db');
});

// start the server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
