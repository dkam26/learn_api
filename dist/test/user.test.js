'use strict';

var _server = require('../api/server');

var _server2 = _interopRequireDefault(_server);

var _user = require('../api/models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

var user = {
  username: 'ii',
  firstname: 'deo',
  secondname: 'Kamara',
  password: '1234',
  email: 'deo.kamara@andela.com'
};
chai.use(chaiHttp);

describe('MeteoApp', function () {
  before(function (done) {
    _user2.default.remove({}, function (err) {});
    done();
  });
  describe('/POST signup and /POST login', function () {
    it('it should POST  signup', function (done) {
      chai.request(_server2.default).post('/ul/signup').send(user).end(function (err, res) {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.own.property('Message', 'User successfully added!,ii');
        done();
      });
    });
    it('it should validate POST  signup', function (done) {
      var invalidUserInfo = {
        username: 'ii',
        firstname: 'deo',
        secondname: 'Kamara',
        password: '1234'
      };
      chai.request(_server2.default).post('/ul/signup').send(invalidUserInfo).end(function (err, res) {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.own.property('Message', 'Missing field email');
        done();
      });
    });
  });
  describe('/POST login', function () {
    it('it should POST  login', function (done) {
      chai.request(_server2.default).post('/ul/login').send({ 'username': user.username, 'password': user.password }).end(function (err, res) {
        expect(res.status).to.equal(201);
        done();
      });
    });
    it('it should validate POST  login', function (done) {
      chai.request(_server2.default).post('/ul/login').send({ 'username': user.username, 'password': '123' }).end(function (err, res) {
        expect(res.status).to.equal(401);
        expect(res.body).to.have.own.property('Message', 'Wrong credentials');
        done();
      });
    });

    it('it should validate POST  login', function (done) {
      chai.request(_server2.default).post('/ul/login').send({ 'username': user.username, 'password': '' }).end(function (err, res) {
        expect(res.status).to.equal(401);
        expect(res.body).to.have.own.property('Message', 'Wrong credentials');
        done();
      });
    });
  });
  after(function () {
    _server2.default.close(function () {
      console.log('Closed out remaining connections.');
      //  Close db connections, etc.
    });
  });
});