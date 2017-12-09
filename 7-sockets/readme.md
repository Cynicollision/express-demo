# Rendering Web Pages
[Intro to Express](https://github.com/Cynicollision/express-demo) > Part 7: Sockets

## Sending messages to the client with sockets
A basic chat application that demonstrates real-time communication between clients using [Socket.IO](https://socket.io). 

### Installation
```
npm install socket.io
````

### Configuration/Usage
```javascript
var server = app.listen(3000, () => {
  console.log('Listening on port 3000');
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log('somebody connected');

  socket.on('send', function (data) {
    io.emit('receive', data);
  });
});
```