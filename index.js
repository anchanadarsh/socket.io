var express = require('express');
var socket = require('socket.io');

//app setup
var app = express();

var server = app.listen(4000, function () {
    console.log('app is listening to port 4000');
});

app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection', function (socket) {
    //    console.log('connection established with socket ' + socket.id);
    socket.on('chat', function (data) {
        console.log(data);
        io.sockets.emit('chat', data);
    })
    socket.on('typing', function (data) {
        console.log(data);
        socket.broadcast.emit('typing', data);
    })
});
