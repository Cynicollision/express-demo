# Express JS
(TODO: this is part of a series - click here for the table of contents)

## Middleware Example: Request Logging
This example uses Morgan (TODO: link), an HTTP request logging library.

### Installation 
```
npm install morgan
````

### Configuration

```javascript
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
// ...
```
[TODO(notes) similar, contrived example - basic usage of middelware]