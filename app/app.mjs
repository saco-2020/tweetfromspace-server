//install library
import { translate } from "./modules/iss-api.js"; 
import io from 'socket.io';

const port = process.env.PORT || 5000;
const option = {
  path: '/',
  cookie: false,
  severClient: false,
  //transports: ['websocket']
}
const socket = io(port, option);


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