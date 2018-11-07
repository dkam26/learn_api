'use strict';

var statusCodes = { 'Success': 201, 'Error': 400 };

var responseData = function responseData(res, data, code) {
  res.status(statusCodes[code]).json(data);
};

module.exports = {
  responseData: responseData
};