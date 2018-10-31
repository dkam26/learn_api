'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validate = require('../utils/validate.util');

var _validate2 = _interopRequireDefault(_validate);

var _db = require('../utils/db.util');

var _response = require('../utils/response.util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handles user functionality.
 */
var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: 'create',

    /**
     * @param {string} req The request.
     * @param {string} res The response.
     * @return {dict} Response.
     */
    value: function create(req, res) {
      var user = req.body;
      return (0, _validate2.default)('createUser', user).then(function () {
        return (0, _db.createUser)(user).then(function (username) {
          (0, _response.responseCreate)(res, username);
        });
      }).catch(function (err) {
        (0, _response.responseError)(res, err);
      });
    }
    /**
    * @param {string} req The request.
    * @param {string} res The response.
    * @return {dict} Response.
    */

  }, {
    key: 'login',
    value: function login(req, res) {
      var user = req.body;
      return (0, _validate2.default)('login', user).then(function () {
        return (0, _db.authLogin)(user).then(function (creditials) {
          (0, _response.responseLogin)(res, creditials);
        }).catch(function (err) {
          (0, _response.responseLoginError)(res, err);
        });
      });
    }
  }]);

  return UserController;
}();

exports.default = UserController;