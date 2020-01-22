const express = require('express');

var app = express();

var envVar = process.env.EnvVar;

var port = process.env.PORT || 4000;

app.get('/', function (req, res) {
    res.send('Hello, world!');
});


app.get('/env', function (req, res) {
    res.send(envVar);
});

app.listen(port, function () {
    console.log('app listening on port 3000...');
});
