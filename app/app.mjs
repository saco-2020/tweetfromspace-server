//install library
import http from "http";
import fs from "fs";
import path from "path";
import express from "express";
import io from "socket.io";
import json from "./modules/get-iss-pojition-api.mjs";
let app = express();
let wss = new io();
let Port = process.env.Port || 7000;

app.use(express.static(__dirname + "/"));

let server = http.createServer(app);
server.listen(port);

console.log("http server listening on %d", port);


//wait websocket
wss.on('connection', (socket) => {
  console.log("user connect!");
  let pushflag = true;
  while(pushflag == true){
    socket.emit("msg", json);
    console.log(json);
  }
  socket.on("disconnect",() =>{
    console.log("disconnect");
    return pushflag = false;
  });
});

console.log('Start socket server : http://127.0.0.1:8023');
