'use strict';

// const eventPool = require('../eventPool');
const { io } = require('socket.io-client');
const socket = io.connect('http://localhost3001/caps');

let Chance = require('chance');
let chance = new Chance();

module.exports = (store) => {
  
  const payload = {
    store: store,
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };

  socket.emit('pickup', payload);

};