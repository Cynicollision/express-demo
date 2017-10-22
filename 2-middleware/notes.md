# Middleware
[Intro to Express](https://github.com/Cynicollision/express-demo) > Part 2: Middleware

## What is middleware?
Middleware is a key concept to understand when writing an Express application. As described in their documentation:
> Express is a routing and middleware web framework that has minimal functionality of its own: **An Express application is essentially a series of middleware function calls.**

The definition of the term "middleware" is contextual. For Express, middleware refers to components that processes the request/response lifecycle.

Writing an Express application involves using third-party middleware to perform common tasks as well as writing your own middleware for specific functionality.

![alt text](../_img/request-delegate-pipeline.png "Request delegate pipeline")

([source](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware?tabs=aspnetcore2x))



## Middleware Example: Request Logging
This is a simple example of using application-level middleware. [Morgan](https://github.com/expressjs/morgan) is an HTTP request logger.

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
