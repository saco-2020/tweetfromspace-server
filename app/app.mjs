//install library
import json from "./modules/get-iss-pojition-api.mjs";
import http from 'http';
import express from 'express';
import io from 'socket.io';
const app = express();
const port = process.env.Port || 7000;
const server = http.createServer(app);
const socket = io(server);


app.get('/', (req,res) => {
  res.send("<h1>hallo!</h1>");
});

//wait websocket
socket.on("connection", (socket) => {
  console.log("user connect!");

  send_servertime();

  socket.on("disconnect",() =>{
    console.log("disconnect");
  });

  socket.on("from_client", (obj) => {
    console.log(obj);
  });
});


// とりあえず一定間隔でサーバ時刻を"全"クライアントに送る (io.emit)
let send_servertime = () => {
    let now = new Date();
    socket.broadcast.emit("from_server", json);
    //console.log(json);
    setTimeout(send_servertime, 1000);
};


server.listen(port,() => {
    console.log(`Start socket server : http://localhost:${port}`);
});