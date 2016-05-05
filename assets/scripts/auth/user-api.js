'use strict';

const app = require('../../app-data.js');
const ui = require('../ui/ui.js');

const users = () => {
  console.log('Start request');
  $.ajax({
    method: 'GET',
    url: app.api
  })
  .success((people) =>  {
    ui.displayUsers(people);
  })
  .fail((failure) => console.error(failure));
};


module.exports= {
  users
};
