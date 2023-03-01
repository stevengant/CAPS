'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// socket server singleton: listening for events at localhost:3001
const server = new Server();

// creates namespace
const caps = server.of('/caps');

function logger(event, payload) {
  console.log({
    event,
    time: new Date().toISOString(),
    payload,
  });
}

//create / allow for connections
caps.on('connection', (socket) => {
  console.log('Socket connected to caps namespace', socket.id);

  socket.onAny((event, payload) => {
    const time = new Date();
    console.log('EVENT:', {event, time, payload});
  });

  socket.on('PICKUP', (payload) => {
    socket.broadcast.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    socket.broadcast.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERY', (payload) => {
    socket.broadcast.emit('DELIVERY', payload);
  });
});


server.listen(PORT);