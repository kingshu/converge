 var io = require('socket.io').listen(8080, {log:false}); 

    io.on('connection', function (socket) {
      console.log(socket.id);
      socket.emit('news', { hello: 'world' });
      socket.on('TextMessage', function (data) {
        console.log(data);
      });
    });
