'use strict';

let eventPool = require('./eventPool');
require('./vendor');
require('./driver');

let Chance = require('chance');
let chance = new Chance();

eventPool.on('pickup', (payload) => {
  console.log(`EVENT `,
    {
      event: 'pickup',
      time: new Date().toISOString(),
      payload,
    }
  );
});

eventPool.on('in-transit', (payload) => {
  setTimeout(() => {
    console.log(`EVENT ` ,
      {
        event: 'in-transit',
        time: new Date().toISOString(),
        payload,
      }
  );
  eventPool.emit('delivered', payload);

  }, 1000);
});

eventPool.on('delivered', (payload) => {
  setTimeout(() => {
    
    console.log(`DRIVER: picked up ${payload.orderID}`);
    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
    console.log(`EVENT `,
      {
        event: 'delivered',
        time: new Date().toISOString(),
        payload,
      }
  );
  eventPool.emit('delivered', payload);

  }, 1000);
});

const start = () => {
  setInterval(() => {
    let store = chance.company();
    eventPool.emit('VENDOR', store);
  }, 5000);
};

start();

