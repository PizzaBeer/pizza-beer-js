'user strict';

const app = require('../../app-data.js');
const authApi = require('../auth/user-api.js');

//runs ajax call to get users
const addHandlers = function() {
    $('#get-users').on('click', function(event){
      event.preventDefault();
      authApi.users();
  });
};

module.exports= {
    addHandlers
  };
