const io = require('socket.io-client');

// 1秒ごとに現在の時間をプリントするコマンド
var command = 'for i in `seq 1 5`; do date; sleep 1s; done';
var socket = io.connect('http://localhost:8023');//接続先のサーバを指定

console.log(command);

socket.on('connect' ,function (data) {//コネクションの接続
  socket.emit('exec',command,function(msg){//シェルコマンドを送る
    console.log(msg);
  });

  socket.on('response',function(msg){//サーバからのレスポンスを受け取る
    msg = msg['data'];
    console.log(msg);
  });

  socket.on('exit',function(msg){//終了を受け取ったらSocket通信を終了する
    console.log(msg);
    socket.disconnect()
  });
});