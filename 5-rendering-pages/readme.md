# Rendering Web Pages
[Intro to Express](https://github.com/Cynicollision/express-demo) > Part 5: Rendering Web Pages

## Using the Pug template engine 
This code sample shows how to render web pages using [pug templates](https://pugjs.org).

### Installation
```
npm install pug
````

### Configuration/Usage
```javascript
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('*', function (req, res) {
  res.render('index');
});
```