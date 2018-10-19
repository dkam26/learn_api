
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

import Server from '../api/server';
import User from '../api/models/user.model';
const user ={
  username: 'ii',
  firstname: 'deo',
  secondname: 'Kamara',
  password: '1234',
  email: 'deo.kamara@andela.com',
};
chai.use(chaiHttp);

describe('MeteoApp', () => {
  before((done) =>{
    User.remove({}, (err) => {
    });
    done();
  });
  describe('/POST signup and /POST login', () => {
    it('it should POST  signup', (done) => {
      chai.request(Server)
          .post('/ul/signup')
          .send(user)
          .end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('Message',
                'User successfully added!,ii');
            done();
          });
    });
    it('it should validate POST  signup', (done) => {
      const invalidUserInfo={
        username: 'ii',
        firstname: 'deo',
        secondname: 'Kamara',
        password: '1234',
      };
      chai.request(Server)
          .post('/ul/signup')
          .send(invalidUserInfo)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.own.property('Message',
                'Missing field email' );
            done();
          });
    });
  });
  describe('/POST login', () => {
    it('it should POST  login', (done) => {
      chai.request(Server)
          .post('/ul/login')
          .send({'username': user.username, 'password': user.password})
          .end((err, res) =>{
            expect(res.status).to.equal(201);
            done();
          });
    });
    it('it should validate POST  login', (done) => {
      chai.request(Server)
          .post('/ul/login')
          .send({'username': user.username, 'password': '123'})
          .end((err, res) =>{
            expect(res.status).to.equal(401);
            expect(res.body).to.have.own.property('Message',
                'Wrong credentials' );
            done();
          });
    });

    it('it should validate POST  login', (done) => {
      chai.request(Server)
          .post('/ul/login')
          .send({'username': user.username, 'password': ''})
          .end((err, res) =>{
            expect(res.status).to.equal(401);
            expect(res.body).to.have.own.property('Message',
                'Wrong credentials' );
            done();
          });
    });
  });
  after(() => {
    Server.close( () => {
      console.log( 'Closed out remaining connections.');
    //  Close db connections, etc.
    });
  });
});
