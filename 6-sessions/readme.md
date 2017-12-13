# Session Management
[Intro to Express](https://github.com/Cynicollision/express-demo) > Part 6: Session Management

## Managing server-side session data
This code sample demonstrates a simple shopping-cart implementation using in-memory sessions on the server. 

Note: a MongoDB connection is required for this demo (see call to `mongoose.connect` in sessions.js).

### Installation
```
npm install express-session
````

### Configuration/Usage
```javascript
app.use(session({
  secret: 'wmdtug',
  resave: false,
  saveUninitialized: true,
}));

app.post('/foo', (req, res) => {
  var session = req.session;

  res.send(200);
});
```