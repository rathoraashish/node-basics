var fs = require("fs");
var mydata = require("./second");
var express = require('express');
var app = express();

app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + "/" + "example.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

app.post('/listUsers', function(req, res) {
    fs.readFile(__dirname + "/" + "example.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
})