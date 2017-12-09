var express = require('express');
var morgan = require('morgan');

var app = express();

// configure middleware
app.use(morgan('dev'));

// serve static content
app.use('/public', express.static(__dirname + '/public'));

// configure view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// define default route
app.get('*', (req, res) => {
    res.render('index');
});

// start the server
var server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});

// configure socket.io
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log(`somebody connected (socket.id=${socket.id})`);

    socket.on('send', function (data) {
        socket._username = data.sender;
        io.emit('receive', data);
    });

    socket.on('disconnect', function () {

        if (socket._username) {
            io.emit('receive', { messageText: '<disconnected>', sender: socket._username });
        }
    });
});

