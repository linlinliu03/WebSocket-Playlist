var express = require('express');

var app = express();

app.use(express.static('public'));


var server = app.listen(4000, ()=>{
    console.log("Listening request on port 4000!")
})

