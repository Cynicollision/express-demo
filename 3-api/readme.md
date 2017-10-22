# RESTful API
[Intro to Express](https://github.com/Cynicollision/express-demo) > Part 3: Defining an API

## API Example: Request handling
This code sample demonstrates basic handling of GET and POST requests.

The [body-parser](https://github.com/expressjs/body-parser) middleware parses JSON, raw, text, and URL-encoded form request bodies and makes the data accessible via `req.body`. 

### Installation
```
npm install body-parser
````

### Configuration
```javascript
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded());

app.post('/api/test', (req, res) => {
  let body = req.body;

  res.send(200);
});
```