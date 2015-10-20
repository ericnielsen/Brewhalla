var express=require('express');
var app=express();
var path=require('path');
var searchData=require('./public/dist/search.js');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var Cookie = mongoose.model('Cookie', {id: Number});

app.use(cookieParser());
app.use('/search', searchData);
app.use(express.static('public/dist/image/'));

app.use(function (req, res, next) {
 var cookie = req.cookies.cookieName;
 if (cookie === undefined) {
   var randomNumber = Math.random().toString();
   randomNumber = randomNumber.substring(2, randomNumber.length);
   res.cookie('cookieName', randomNumber, { maxAge: 900000000, httpOnly: true });

   var cookie = new Cookie({id:randomNumber});
   cookie.save(function (err) {
   });
 }
 next();
});

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
app.get('/geoGet.js',function(req, res){
    res.sendFile(path.join(__dirname + '/geoGet.js'));
});

app.listen(1339);
console.log('The port is working');