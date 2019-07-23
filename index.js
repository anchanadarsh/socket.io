var express = require('express');

//app setup
var app = express();

var server = app.listen(4000, function () {
    console.log('app is listening to port 401003');
});

app.use(express.static('public'));
