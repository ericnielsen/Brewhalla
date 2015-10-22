var express=require('express');
var location=express.Router();
var mongoose = require('mongoose');
var Location = mongoose.model('Location', {id: Number, latitude: Number, longitude: Number});

location.get('/:id/:lat/:long',function(req, res){
    var cookie = req.cookies.cookieName;
    Location.findOne({ 'id': cookie }, function (err, location) {
        if(typeof(location) !== 'undefined' && location) {
        console.log('nothing happens');
        }
        else {
            var locationObject= new Location(
                {
                    id:cookie,
                    latitude: req.params.lat,
                    longitude:req.params.long
                }
            );
            locationObject.save();
            res.send();
        }
    });
});
module.exports = location;