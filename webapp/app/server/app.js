"use strict"

var express = require('express'),
    path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '/..', 'public')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/', function (req, res) {
    res.sendFile('../public/index.html', { root: __dirname });

    //console.log(req.url);
});


app.listen(5000, function () {
    console.log('Server listening on  : ' + 5000);
});
