'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var DataSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  weatherConditions: String,
  windSpeed: String,
  humidity: String,
  location: String,
  date: Date
});

var Data = _mongoose2.default.model('Data', DataSchema);
exports.default = Data;