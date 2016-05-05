'use strict';

//Function to invoke the handlebars template
const displayUsers = function(people) {
  let userListingTemplate = require('../../templates/user-table.handlebars');
  $('#users').html(userListingTemplate({
    people
  }));
};

module.exports = {
  displayUsers
};
