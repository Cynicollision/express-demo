# Data Access
[Intro to Express](https://github.com/Cynicollision/express-demo) > Part 4: Data Access

## Saving and retrieving MongoDB documents
This demo shows how to interact with a [MongoDB](https://www.mongodb.com/) database using [Mongoose](http://mongoosejs.com), an object modelling library.

Note: a MongoDB connection is required for this code sample (see call to `mongoose.connect` in data-access.js).

### Installation
```
npm install mongoose
````

### Configuration/Usage
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

const BlogPost = mongoose.model('BlogPost', mongoose.Schema({
  title: { type: String },
  content: { type: String },
  postedOn: Date,
}));

BlogPost.create(blogPostData, (err, blogPost) => {

  if (err) {
    console.log(err);
  }
  else {
    console.log('created successfully!');
  }
});
```