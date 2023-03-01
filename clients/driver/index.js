'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

socket.on('PICKUP', (payload) => {
  setTimeout(() => {
    console.log('DRIVER: picked uppackage.');
    socket.emit('IN-TRANSIT', payload);
  }, 1000);
  
  setTimeout(() => {
    console.log('DRIVER: package has been delivered.');
    socket.emit('DELIVERY', payload);
  }, 2000);
});
