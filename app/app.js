//install library
import io from"socket.io";
import getIssPojitionApi from "./modules/get-iss-pojition-api.js";
io.listen(8023);
let json = getIssPojitionApi();
json();
//wait websocket
io.on('connection', (socket) => {
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
