var express=require('express');
var app=express();
var path=require('path');
var searchData=require('./search.js');

app.use('/search',searchData);
app.use(express.static('image'));

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname + '/public/dist/index.html'));
});

app.get('/default.css',function(req, res){
    res.sendFile(path.join(__dirname + '/public/dist/default.css'));
});

app.get('/action.js',function(req, res){
    res.sendFile(path.join(__dirname + '/public/dist/action.js'));
});

app.listen(1339);
console.log('The port is working');