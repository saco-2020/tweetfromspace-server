//install library
var express = require('express');
var app = express();
//test
var http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env,PORT || 7000;

app.get('/',function(req,res){
    res.sendfile(__dirname+'/index.html');
});

//chenge websocket
io.on('connection',funcution(socket){
    console.log('connected');
});

//http listening
http.listen(PORT.funcution(){
    console.log('server listeing. Port:' + PORT)
})