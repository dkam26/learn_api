'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var DataSchema = new Schema({

  weatherConditions: String,
  windSpeed: String,
  humidity: String,
  date: String,
  location: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

var Data = _mongoose2.default.model('Data', DataSchema);
exports.default = Data;