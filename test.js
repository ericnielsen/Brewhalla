var request = require('supertest')('http://localhost:1339');
var should = require('should');
var express = require('express');

describe('Express Backend Tests', function() {
    it('HTML: Functional', function(done) {
        request.get('/')
            .expect(200)
            .end(done)
    });
    it('CSS: Functional', function(done) {
        request.get('/default.css')
            .expect(200)
            .end(done)
    });
    it('Javascript: Functional', function(done) {
        request.get('/action.js')
            .expect(200)
            .end(done)
    });
    it('Yelp API: Functional', function(done) {
        request.get('/search/data/anaheim')
            .expect(200)
            .end(done)
    });
    it('Static Route: Functional', function(done) {
        request.get('/beerpic.jpg')
            .expect(200)
            .end(done)
    });
});