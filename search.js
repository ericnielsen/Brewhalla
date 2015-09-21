var express = require('express');
var yelpSearch = express.Router();
var yelp = require("node-yelp");

yelpSearch.get('/data/:location', function(req,res){
    var myYelp = yelp.createClient({
        oauth: {
            "consumer_key": "XBSJFJsDjNgvoyr2LKzZng",
            "consumer_secret": "M6MxbbPJ1MMSsnDbFVDxkTPjujk",
            "token": "h9JSuEFd5WegVN-d1gfwVkpLAR16SPoF",
            "token_secret": "IYhXjD_5WmksStA3e_46eJOCwBs"
        }});

    myYelp.search(
    {
        location: req.param.location ,
        term: "brewery",
        category_filter: "breweries",
        radius_filter: "40000"

        }).then( function(data) {
         res.send(data);
    });
});
module.exports = yelpSearch;