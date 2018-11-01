'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _user = require('./routes/user.route');

var _user2 = _interopRequireDefault(_user);

var _search = require('./routes/search.route');

var _search2 = _interopRequireDefault(_search);

var _data = require('./routes/data.route');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var jsonParser = require('body-parser').json;
var morgan = require('morgan');

app.use(jsonParser());
app.use(morgan('dev'));

console.log(process.env);
var mongoose = require('mongoose');
mongoose.connect(process.env.DBHost, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', function (err) {
  console.error('connection error: ', err);
});
db.once('open', function () {
  console.log('success');
});

if (_config2.default.util.getEnv('NODE_ENV') !== 'test') {
  // use morgan to log at command line
  app.use(morgan('combined'));
  // 'combined' outputs the Apache style LOGs
}

app.use('/ul', _user2.default);

app.use('/ul', _data2.default);
app.use('/ul', _search2.default);
// 404 error handler
app.use(function (req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

var port = process.env.PORT || 3000;

var Server = app.listen(port, function () {
  console.log('Express running ', port);
});

exports.default = Server;