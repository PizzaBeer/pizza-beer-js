'use strict';

const app = require('../app-data.js');
const ui = require('../ui/ui.js');

const users = (success, fail) => {
  console.log('Start request');
  $.ajax({
    method: 'GET',
    url: app,
  })
  .success((people) => ui.displayUsers(people));
  .fail(failure) => console.error(error);
};


module.exports= {
  users
};
