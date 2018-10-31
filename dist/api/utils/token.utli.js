'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateToken = function validateToken(data) {
  return new Promise(function (resolve, reject) {
    if (!data) {
      return reject({ 'Message': 'Missing token' });
    }
    _jsonwebtoken2.default.verify(data, 'super', function (err, decoded) {
      if (err) {
        return reject({
          auth: false,
          message: 'Failed to authenticate token.'
        });
      }
      return resolve(true);
    });
  });
};
exports.default = validateToken;