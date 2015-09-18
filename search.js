var express = require('express');
var request = require('request');
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
        term: req.param.term,
        location: "Huntington Beach" ,
        category_filter: "breweries"
        }).then( function(data) {
         res.send(data);
    });
});

module.exports = yelpSearch;