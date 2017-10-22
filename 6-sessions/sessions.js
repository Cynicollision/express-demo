const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

// configure middleware
app.use(morgan('dev'));
app.use(session({
  secret: 'wmdtug',
  resave: false,
  saveUninitialized: true,
}))

// configure view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// configure routes
app.get('*/post/:id', function (req, res) {

  // TODO: set number of times this post has been viewed in session data
  //  something like e.g. req.session.someData = 'foo';

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

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
