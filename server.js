var express=require('express');
var app=express();
var path=require('path');
var searchData=require('./public/dist/search.js');
var location=require('./location.js');
//var proximity=require('./proximity.js');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var Cookie = mongoose.model('Cookie', {id: Number});

app.use(cookieParser());
app.use('/search', searchData);
app.use('/location', location);
//app.use('/proximity', proximity);
app.use(express.static('public/dist/image/'));
app.use(express.static(__dirname + '/public'));


app.get('/',function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/default.css',function(req, res){
    res.sendFile(path.join(__dirname + '/default.css'));
});

app.get('/action.js',function(req, res){
    res.sendFile(path.join(__dirname + '/action.js'));
});

app.use(function (req, res, next) {
    var cookie = req.cookies.cookieName;
    if (cookie === undefined) {
        console.log('creating new cookies...');
        var randomNumber = Math.floor(Math.random() * 1000000000000000);
        res.cookie('cookieName', randomNumber, { maxAge: 900000000, httpOnly: true });

        var cookie = new Cookie({id:randomNumber});
        cookie.save(function (err) {
        });
    }
    else{console.log('cookies allready exist');}
    next();
});

app.get('/geo.js',function(req, res){
    res.sendFile(path.join(__dirname + '/geo.js'));
});

app.listen(1339);
console.log('The port is working');