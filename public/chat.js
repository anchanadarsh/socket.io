var socket = io.connect("http://localhost:4000/");

var btn = document.getElementById('btn');
var username = document.getElementById('username');
var message = document.getElementById('message');
var output_area = document.getElementById('output_area');


btn.addEventListener('click', function () {
    console.log('name', username.value);
    console.log('message', message.value);
    socket.emit('chat', {
        message: message.value,
        username: username.value
    });
});

socket.on('chat', function (data) {
    output_area.innerHTML += '<p><strong>' + data.username + '</strong> : ' + data.message + '</p>'
})
