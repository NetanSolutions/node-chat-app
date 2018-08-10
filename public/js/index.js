var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'paul',
    text: 'hello world'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from Server');
});

socket.on('newMessage', function(message) {
  console.log('New message received', message);
});
