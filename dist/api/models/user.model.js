'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
require('mongoose-type-email');

var UserSchema = new Schema({
  username: String,
  firstname: String,
  secondname: String,
  password: String,
  email: String,
  data: [{ type: Schema.Types.ObjectId, ref: 'Data' }]
});

var User = _mongoose2.default.model('User', UserSchema);
exports.default = User;