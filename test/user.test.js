import User from '../api/models/user.model';
test('test if user model is a function model', () => {
  expect(typeof(User)).toBe('function');
  expect(User.schema.obj.username).toBeTruthy();
  expect(User.schema.obj.firstname).toBeTruthy();
  expect(User.schema.obj.secondname).toBeTruthy();
  expect(User.schema.obj.password).toBeTruthy();
  expect(User.schema.obj.email).toBeTruthy();
});
