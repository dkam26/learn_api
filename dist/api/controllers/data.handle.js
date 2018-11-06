'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _token = require('../utils/token.utli');

var _token2 = _interopRequireDefault(_token);

var _db = require('../utils/db.util');

var _response = require('../utils/response.util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handles data functionality.
 */
var DataController = function () {
  function DataController() {
    _classCallCheck(this, DataController);
  }

  _createClass(DataController, null, [{
    key: 'saveData',

    /**
     * @param {string} req The request.
     * @param {string} res The response.
     * @return {dict} Response.
     */
    value: function saveData(req, res) {
      var data = req.body;
      var theDate = new Date(data['date'] * 1000);
      var dateString = theDate.toGMTString();
      data['date'] = dateString;
      var token = req.headers['x-access-token'];
      return (0, _token2.default)(token).then(function () {
        (0, _db.storeData)(data, token).then(function (data) {
          return (0, _response.responseData)(res, data);
        }).catch(function (err) {
          console.log(err);
        });
      }).catch(function (err) {
        responseTokenError(res, err);
      });
    }
    /**
    * @param {string} req The request.
    * @param {string} res The response.
    * @return {dict} Response.
    */

  }, {
    key: 'queryData',
    value: function queryData(req, res) {
      var token = req.headers['x-access-token'];
      return (0, _token2.default)(token).then(function () {
        return (0, _db.query)(token).then(function (data) {
          return (0, _response.responseData)(res, data);
        });
      });
    }
    /**
    * @param {string} req The request.
    * @param {string} res The response.
    * @return {dict} Response.
    */

  }, {
    key: 'deleteData',
    value: function deleteData(req, res) {
      var dataToDelete = req.params.id;
      var token = req.headers['x-access-token'];
      return (0, _token2.default)(token).then(function () {
        return (0, _db.deletedata)(token, dataToDelete).then(function (data) {
          return (0, _response.responseData)(res, data);
        });
      });
    }
  }]);

  return DataController;
}();

exports.default = DataController;