'use strict';

const app = require('../app-data.js');


const users = (success, fail) => {
  console.log('Start request');
  $.ajax({
    method: 'GET',
    url: app,
  })
  .done(success)
  .fail(fail);
  console.log('Request made');
};
