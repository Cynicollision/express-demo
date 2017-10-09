# Express JS
(TODO: this is part of a series - click here for the table of contents)

## API Example: Serving Data

First, basic GETs, POSTs, w/ queries/parameters...

Then, POSTing data:

TODO: use body parser in this example? If so, link, plus: ...

```
npm install body-parser
````

### Configuration (TODO: test...)

TODO: bodyParser options?
```javascript
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
```