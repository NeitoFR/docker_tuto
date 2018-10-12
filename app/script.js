const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
    console.log('He asked for a Hello');
    
  res.send('Hello World').end();
//   res.send({"a": 1}).end();
})

app.listen(9002, function () {
    console.log('Example app listening on port 9002!');
  })