'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchLocation = function searchLocation(location) {
  return new Promise(function (resolve, reject) {
    (0, _request2.default)('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=AIzaSyA6k2H0USbJYFOvcrBwEBbmlXZ0cVUbGuA', { json: true }, function (res, body) {
      return resolve(body['body']);
    });
  });
};

var getLocation = function getLocation(data) {
  var coordinates = data;
  return new Promise(function (resolve, reject) {
    return resolve(coordinates['results'][0]['geometry']['location']);
  });
};

var getWeather = function getWeather(time, data) {
  return new Promise(function (resolve, reject) {
    (0, _request2.default)('https://api.darksky.net/forecast/4291d3bded0ec0f06a1d15eca0668f1a/' + data.lat + ',' + data.lng + ',' + time + '?exclude=currently,hourly,flags', { json: true }, function (res, body) {
      return resolve(body['body']);
    });
  });
};

module.exports = {
  searchLocation: searchLocation,
  getLocation: getLocation,
  getWeather: getWeather
};