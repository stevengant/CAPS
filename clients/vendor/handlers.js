'use strict';

// const eventPool = require('../eventPool');
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps')

let Chance = require('chance');
let chance = new Chance();

const generateOrder = () => {
  let payload = {
    store: '1-206-flowers',
    id: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  console.log('VENDOR: order ready for pickup');
  socket.emit('PICKUP', payload);
};

const thankDriver = (payload) => {
  console.log('Thanks for delivering our package to', payload.customer)
}

module.exports = { generateOrder, thankDriver };