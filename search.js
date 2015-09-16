//There is some javascript documentation that I found, but it is very limited:
//https://github.com/olalonde/node-yelp/
//https://www.yelp.com/developers/documentation/v2/business
//On their API page they offer templates, but in languages I don't know:
//https://www.yelp.com/developers/documentation/v2/examples

//In lieu of a format I tried to match what they offered, about what I knew from 7.0.  Obviously that didn't work:

var express = require('express');
var request = require('request');

var yelpSearch = express.Router();
var yelp = require("yelp");

yelpSearch.get('/data', function(req, res) {
    request(yelp.createClient({
        consumer_key: "XBSJFJsDjNgvoyr2LKzZng",
        consumer_secret: "M6MxbbPJ1MMSsnDbFVDxkTPjujk",
        token: "iFGeQNZdSJPCWq_qdGWOBEHVDjyOT0nZ",
        token_secret: "BNYHWbboW8wnhuzOkxuewSII3owt"
    }));

    yelp.business("yelp-san-francisco", function(error, data) {
        console.log(error);
        console.log(data);
    });
    res.send(console.log(stepone))
});

module.exports = yelpSearch;