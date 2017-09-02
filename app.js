var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));
app.set('views', __dirname + '/public');
app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
    res.sendfile('index.html', { root: __dirname + "/" });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + "/" });
});



app.listen(1000, function() {
    console.log(1000);
});