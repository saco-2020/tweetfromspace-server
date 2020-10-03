//install library
const express = require("express");
const port = 8023;
const app = express();
var io = require("socket.io")(port);





//wait websocket
io.on('connection',(socket) => {
    socket.on('exec', function ( command ) {
        execCmd = exec(command);
        console.log(execCmd.pid);
    
    
        execCmd.stdout.on('data',function(data) {// 実行中の出力を受け取る
          console.log(data);
          data = data.split(/\r\n|\n/);
          io.sockets.emit('response', {data:data});
        });
    
        execCmd.stderr.on('data', function (data) {// エラーの出力を受け取る
          console.log(data);
          data = data.split(/\r\n|\n/);
          io.sockets.emit('response', {data:data});
        });
    
        execCmd.on('exit', function (code) {// 処理が終了したことをクライアントに送信
          io.sockets.emit('exit', {data:code});
        });
    });
});

console.log('Start socket server : http://127.0.0.1:8023');
