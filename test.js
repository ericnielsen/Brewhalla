var request = require('supertest')('http://localhost:1337');
var should = require('should');
var express = require('express');

describe('Express Backend Tests', function() {
    it('200', function(done) {
        request.get('/')
        .expect(200)
        .end(done)
    });
    console.log('Test complete');
});