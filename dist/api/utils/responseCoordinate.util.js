"use strict";

var responseCoordinates = function responseCoordinates(res, data) {
  res.status(201).json(data);
};

var responseWeather = function responseWeather(res, data) {
  res.status(201).json(data);
};

var responseTokenError = function responseTokenError(res, data) {
  res.status(401).json(data);
};
module.exports = {
  responseCoordinates: responseCoordinates,
  responseWeather: responseWeather,
  responseTokenError: responseTokenError
};