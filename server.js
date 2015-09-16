var express = require('express');
var app = express();
var path = require('path');

var seachData = require('./search.js');


app.use('/search', seachData);


app.get('/', function(req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(1337);
console.log('The port is working');