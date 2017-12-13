# Rendering Web Pages
[Intro to Express](https://github.com/Cynicollision/express-demo) > Part 5: Rendering Web Pages

## Using the Pug template engine 
This code sample shows how to render web pages using [pug templates](https://pugjs.org).

Note: a MongoDB connection is required for this demo (see call to `mongoose.connect` in rendering-pages.js).

### Installation
```
npm install pug
````

### Configuration/Usage
```javascript
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('*', (req, res) => {
  res.render('index');
});
```