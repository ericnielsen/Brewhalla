var express=require('express');
var location=express.Router();
var mongoose = require('mongoose');
var yelp=require("node-yelp");
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

location.get('/data/:term', function(req,res){
    var myYelp=yelp.createClient({
        oauth: {
            "consumer_key":"XBSJFJsDjNgvoyr2LKzZng",
            "consumer_secret":"M6MxbbPJ1MMSsnDbFVDxkTPjujk",
            "token":"h9JSuEFd5WegVN-d1gfwVkpLAR16SPoF",
            "token_secret":"IYhXjD_5WmksStA3e_46eJOCwBs"
        }});
    myYelp.search(
    {
        ll: req.params.term,
        limit:20,
        sort:1,
        category_filter:"breweries",
        radius_filter:"16000"
        }).then( function(data) {
         res.send(data);
    });
});
module.exports = location;