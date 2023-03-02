'use strict';

// const eventPool = require('../eventPool');
const { generateOrder, thankDriver } = require('./handlers');
const { io } = require('socket.io-client');

const socket = io('http://localhost:3001/caps');

socket.on('DELIVERY', (payload) => {
  thankDriver(payload);
});

setInterval(() => {
  generateOrder();
}, 5000);