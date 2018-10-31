"use strict";

var responseCreate = function responseCreate(res, data) {
  res.status(201).json({ Message: "User successfully added!," + data });
};

var responseError = function responseError(res, data) {
  res.status(400).json({ Message: "" + data });
};

var responseLogin = function responseLogin(res, data) {
  res.status(201).json(data);
};

var responseLoginError = function responseLoginError(res, data) {
  res.status(401).json(data);
};

var responseData = function responseData(res, data) {
  res.status(201).json(data);
};
module.exports = {
  responseCreate: responseCreate,
  responseError: responseError,
  responseLogin: responseLogin,
  responseLoginError: responseLoginError,
  responseData: responseData
};