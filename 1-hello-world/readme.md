# Hello World
[Intro to Express](https://github.com/Cynicollision/express-demo) > Part 1: Hello World

## What is Express?
Express is a:
> Fast, unopinionated, minimalist web framework for Node.js

Various database systems, authentication schemes, and template engines are supported by third-party Node modules.

The current version is 4.16.1 which is what I'm using in this repository. Version 5 is still in its alpha stage and contains some breaking changes [listed here](https://expressjs.com/en/guide/migrating-5.html).

### Installation

```
npm install express
````

### Hello World

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => { 
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Listening port 3000');
});
```