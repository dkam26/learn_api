'use strict';

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _data = require('../models/data.model');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createUser = function createUser(data) {
  return new Promise(function (resolve, reject) {
    _user2.default.find({ 'username': data.username }, function (err, users) {
      if (users.length > 0) {
        return reject('User already exists, ' + data.username);
      } else {
        var user = new _user2.default(data);
        user.save();
        return resolve(data.username);
      }
    });
  });
};
var authLogin = function authLogin(data) {
  return new Promise(function (resolve, reject) {
    _user2.default.findOne({
      'username': data.username,
      'password': data.password }, function (err, users) {
      if (users === null) {
        return reject({ Message: 'Wrong credentials' });
      } else {
        var token = _jsonwebtoken2.default.sign({ id: users._id }, 'super', {
          expiresIn: 86400
        });
        return resolve({ 'user': data.username, 'token': token });
      }
    });
  });
};
var storeData = function storeData(data, token) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken2.default.verify(token, 'super', function (err, decoded) {
      _user2.default.findOne({ '_id': decoded.id }, function (err, user) {
        data['owner'] = user._id;
        var dataToSave = new _data2.default(data);
        dataToSave.save();
        console.log(dataToSave);
        return resolve({ Message: 'Saved!' });
      });
    });
  });
};
var query = function query(token) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken2.default.verify(token, 'super', function (err, decoded) {
      _user2.default.findOne({ '_id': decoded.id }, function (err, user) {
        _data2.default.find({ 'owner': user['_id'] }, function (err, list) {
          return resolve(list);
        });
      });
    });
  });
};

var deletedata = function deletedata(token, data) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken2.default.verify(token, 'super', function (err, decoded) {
      _user2.default.findOne({ '_id': decoded.id }, function (err, user) {
        _data2.default.find({ 'owner': user['_id'], '_id': data }).remove().exec();
        return resolve({ 'Message': 'Data deleted !' });
      });
    });
  });
};
module.exports = {
  createUser: createUser,
  authLogin: authLogin,
  storeData: storeData,
  query: query,
  deletedata: deletedata
};