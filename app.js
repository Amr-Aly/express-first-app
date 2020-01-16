const express = require('express');

var app = express();

var envVar = process.env.EnvVar;

app.get('/', function (req, res) {
    res.send('Hello, world!');
});


app.get('/env', function (req, res) {
    res.send(envVar);
});

app.listen(3000, function () {
    console.log('app listening on port 3000...');
});
