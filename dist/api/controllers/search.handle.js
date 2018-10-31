'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _searchValidate = require('../utils/searchValidate.util');

var _searchValidate2 = _interopRequireDefault(_searchValidate);

var _queryApi = require('../utils/queryApi.util');

var _responseCoordinate = require('../utils/responseCoordinate.util');

var _token = require('../utils/token.utli');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handles user functionality.
 */
var SearchController = function () {
  function SearchController() {
    _classCallCheck(this, SearchController);
  }

  _createClass(SearchController, null, [{
    key: 'getCoordinates',

    /**
     * @param {string} req The request.
     * @param {string} res The response.
     * @return {dict} Response.
     */
    value: function getCoordinates(req, res) {
      var location = req.body;
      var token = req.headers['x-access-token'];
      return (0, _token2.default)(token).then(function () {
        (0, _searchValidate2.default)(location).then(function () {
          return (0, _queryApi.searchLocation)(location['location']).then(function (data) {
            return (0, _queryApi.getLocation)(data);
          }).then(function (data) {
            return (0, _responseCoordinate.responseCoordinates)(res, data);
          });
        }).catch(function (err) {
          console.log(err);
        });
      }).catch(function (err) {
        (0, _responseCoordinate.responseTokenError)(res, err);
      });
    }
    /**
    * @param {string} req The request.
    * @param {string} res The response.
    * @return {dict} Response.
    */

  }, {
    key: 'getForecast',
    value: function getForecast(req, res) {
      var coordinates = req.body.location;
      var time = req.body.time;
      var token = req.headers['x-access-token'];
      return (0, _token2.default)(token).then((0, _queryApi.getWeather)(time, coordinates).then(function (data) {
        return (0, _responseCoordinate.responseWeather)(res, data);
      })).catch(function (err) {
        (0, _responseCoordinate.responseTokenError)(res, err);
      });
    }
  }]);

  return SearchController;
}();

exports.default = SearchController;