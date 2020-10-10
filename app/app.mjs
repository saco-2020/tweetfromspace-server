//install library
import { translate } from "./modules/iss-api.js"; 
//import http from 'http';
//import express from 'express';
import io from 'socket.io';
import { text } from "express";
//const app = express();
const port = process.env.PORT || 5000;
//const server = http.createServer(app);
const socket = io(port);

// 一定間隔でjsonを"全"クライアントに送る (io.emit)

//app.get('/', (req,res) => {
//  res.send("<h1>hallo!</h1>");
//});

//wait websocket
socket.on("connection", (socket) => {
  console.log("user connect!");

  setInterval(() => {
    translate().then((text) =>{
      socket.json.emit('msg push',text);
    });
  }, 1000);

  socket.on("disconnect",() =>{
    console.log("disconnect");
  });

  socket.on("from_client", (obj) => {
    console.log(obj);
  });
});

//server.listen(port,() => {
    console.log(`Start socket server : ws://localhost:${port}. `);
//});