//install library
import io from "socket.io";
import json from "./modules/get-iss-pojition-api.mjs";
let port = process.env.Port || 7000;
let socket = io(port);

//wait websocket
socket.on('connection', (socket) => {
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

console.log(`Start socket server : http://localhost:${port}`);
