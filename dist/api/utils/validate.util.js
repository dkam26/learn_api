'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fields = {
  createUser: ['username', 'firstname', 'secondname', 'password', 'email'],
  login: ['username', 'password']
};
var vadilateUser = function vadilateUser(functionality, user) {
  var userKeys = Object.keys(user);
  var requiredFields = fields[functionality];
  return new Promise(function (resolve, reject) {
    requiredFields.forEach(function (field) {
      if (!userKeys.includes(field)) {
        return reject('Missing field ' + field);
      }
    });
    return resolve(true);
  });
};

exports.default = vadilateUser;