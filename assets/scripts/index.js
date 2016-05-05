'use strict';

require('./example');
const eventHandlers = require('./events/handlers');

// on document ready:

$(() => {
  console.log('Page loaded!');
  eventHandlers.addHandlers();
});
