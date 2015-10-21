var express=require('express');
var location=express.Router();
var mongoose = require('mongoose');

var Location = mongoose.model('Location', {id: Number, latitude: Number, longitude: Number});
location.get('/:id/:lat/:long',function(req, res){
var cookie = req.cookies.cookieName;
console.log('updating profile..' + cookie);
var location= new Location(
        {
            id:cookie,
            latitude: req.params.lat,
            longitude:req.params.long
        }
    );
location.save();
res.send();
});

module.exports = location;