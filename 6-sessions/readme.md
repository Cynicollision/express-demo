# Session Management
[Intro to Express](https://github.com/Cynicollision/express-demo) > Part 6: Session Management

## Managing server-side session data
This code sample demonstrates a simple shopping-cart implementation using in-memory sessions on the server. 

### Installation
```
npm install express-session
npm install body-parser
````

### Configuration/Usage
```javascript
app.use(session({
  secret: 'wmdtug',
  resave: false,
  saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({ 
  extended: true
})); 

app.post('/foo', (req, res) => {
  var session = req.session;
  var body = req.body;

  res.send(200);
});
```