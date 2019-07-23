var socket = io.connect("http://localhost:4000/");

var btn = document.getElementById('btn');
var username = document.getElementById('username');
var message = document.getElementById('message');
var output_area = document.getElementById('output_area');
var user_typing = document.getElementById('userTyping');

btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        username: username.value
    });
});

message.addEventListener('keypress', function () {
    socket.emit('typing', username.value);
});

socket.on('chat', function (data) {
    output_area.innerHTML += '<p><strong>' + data.username + '</strong> : ' + data.message + '</p>'
});

socket.on('typing', function (data) {
    user_typing.innerHTML = '<p><em>' + data + ' is typing... </em></p>'
});
