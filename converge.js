var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.send('poop');
});


io.on('connection', function(socket){
  
  console.log("Socket id "+socket.id+" connected");

  socket.on('TextMessage', function(data){
   // io.emit(data,socket.id);
    console.log(data);
  });

  socket.on('disconnect', function(){
    console.log("disconnected");
  });
});


http.listen(8080, function(){
  console.log('listening on *:8080');
});

