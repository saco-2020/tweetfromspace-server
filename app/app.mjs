//install library
import io from "socket.io";
import http from "http";
import json from "./modules/get-iss-pojition-api.mjs";
let port = process.env.Port || 7000;
let server = http.createServer((req, res) => {
    res.write("hello");
    res.end();
  });
server.listen(port);
let socket = io(server);

//wait websocket
socket.on("connection", (socket) => {
  console.log("user connect!");

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
    socket.emit("from_server", json);
    console.log(json);
    setTimeout(send_servertime, 1000);
};
send_servertime();

console.log(`Start socket server : http://localhost:${port}`);
