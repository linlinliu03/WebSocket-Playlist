var express = require('express');

var app = express();

app.use(express.static('public'));


var server = app.listen(4000, ()=>{
    console.log("Listening request on port 4000!")
})

var socket = require('socket.io');

var io = socket(server);

io.on("connection", (socket) => {
    console.log('made socket connection!')
})
