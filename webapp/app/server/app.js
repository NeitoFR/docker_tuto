"use strict"
//require
require('dotenv').config();

var path = require('path'),
    bodyParser = require('body-parser'),
    express = require('express'),
    http = require('http');
var app = express();

app.use(express.static(path.join(__dirname, '/..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('/', function (req, res) {
    res.sendFile('../public/index.html', { root: __dirname });
});

app.listen(9002, function () {
    console.log('Server listening on port : ' + 9002);
});