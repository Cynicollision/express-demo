var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// configure middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// define a model
var BlogEntry = mongoose.model('BlogEntry', mongoose.Schema({
    title: { type: String },
    content: { type: String },
    postedOn: Date,
}));

// configure routes
app.post('/api/blogentry', (req, res) => {
    let blockEntryData = req.body;

    BlogEntry.create(blockEntryData, (err, entry) => {

        if (err) {
            res.send(500, err);
        }
        else {
            res.send(201);
        }
    });
});

app.get('/api/blogentry', (req, res) => {

    BlogEntry.find({}, (err, entry) => {

        if (err) {
            res.send(500, err);
        }
        else {
            res.send(200, entry);
        }
    });
});

app.get('/api/blogentry/:id', (req, res) => {

    BlogEntry.findById(req.params.id, (err, posts) => {
      
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
    console.log('Connected to demo db');
});

// start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
