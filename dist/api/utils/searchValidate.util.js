'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validateInput = function validateInput(input) {
  return new Promise(function (resolve, reject) {
    var expectedKey = 'location';
    var requiredKey = Object.keys(input)[0];
    if (expectedKey === requiredKey) {
      if (typeof input[expectedKey] === 'string') {
        return resolve(true);
      } else {
        return reject('Should be a string');
      }
    } else {
      return reject('Location field missing');
    }
  });
};
exports.default = validateInput;