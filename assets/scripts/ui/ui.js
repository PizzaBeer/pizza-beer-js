'use strict';

//Function to invoke the handlebars template
const displayUsers = function(users) {
  let usersListingTemplate = require('../templates/user-listing.handlebars');
  $('.table').empty();
  $('.table').append(userListingTemplate({
    users
  }));
};
