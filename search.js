var express = require('express');
var yelpSearch = express.Router();
var yelp = require("node-yelp");

yelpSearch.get('/data/:term', function(req,res){
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
        location: "Orange County" ,
        sort: "1",
        limit:"20",
        category_filter: "breweries",
        radius_filter: "40000"

        }).then( function(data) {
         res.send(data);
    });
});
module.exports = yelpSearch;