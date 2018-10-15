process.env.NODE_ENV = 'test';
import User from '../api/models/user.model';
import Server from '../api/server';
const request = require('supertest')(Server);
const user ={
  username: 'io',
  firstname: 'deo',
  secondname: 'Kamara',
  email: 'deo.kamara@andela.com',
  password: '1234',
};
beforeAll(() => {
  User.remove({}, (err) => {

  });
});

test('test if user model is a function model', () => {
  expect(typeof(User)).toBe('function');
  expect(User.schema.obj.username).toBeTruthy();
  expect(User.schema.obj.firstname).toBeTruthy();
  expect(User.schema.obj.secondname).toBeTruthy();
  expect(User.schema.obj.password).toBeTruthy();
  expect(User.schema.obj.email).toBeTruthy();
});
test('test if user can signup', () => {
  return request
      .post('/ul/signup')
      .send(user)
      .then((response) => {
        expect(response.status).toBe(201);
      });
});

afterAll(() => {
  Server.close( () => {
    console.log( 'Closed out remaining connections.');
  //  Close db connections, etc.
  });
});
