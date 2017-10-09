# Western MA Development Tech User Group 12/9(*confirm*) Presentation
WIP

---
#### Tools we'll be using
- Visual Studio Code (IDE, for coding/debugging)
- Postman (development REST client, for testing our API)


#### Prerequisites
- Install [Node.js](Nhttps://nodejs.org) and npm (included)
  - Installs globally (PATH) for convenience


Installation

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

[TODO(note) Demo #1: Postman + VSCode]