//install library
import express from 'express';
import http from 'http';
const app = express();
const io = require('socket.io')(http);
const port = process.env.port || 7000;

app.get('/', (req,res) => {
    res.json({
        message:"succes"
    });
});

//chenge websocket
io.on('connection',(socket) => {
    console.log('connected');
    // socket conntection
    socket.on('post',(msg) => {
        io.emit('member-post', msg);
    });
});

//http listening
http.listen(port, () => {
    console.log('server listeing. Port:' + port);
});
