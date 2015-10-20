var express=require('express');
var location=express.Router();
var mongoose = require('mongoose');

var Location = mongoose.model('Location', {id: String, latitude: Number, longitude: Number});
location.get('/:id/:lat/:long',function(req, res){

var location= new Location(
        {
            id:req.params.id,
            latitude: req.params.lat,
            longitude:req.params.long
        }
    );
location.save();
res.send();
});

module.exports = location;