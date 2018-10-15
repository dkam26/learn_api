import User from '../models/user.model';
import jwt from 'jsonwebtoken';
const createUser = ( data) => {
  return new Promise((resolve, reject) => {
    const user = new User(data);
    user.save();
    return resolve(data.username);
  });
};
const authLogin = (data) => {
  return new Promise((resolve, reject) =>{
    User.findOne({
      'username': data.username,
      'password': data.password}, (err, users) =>{
      if (users === null) {
        return reject({Message: 'Wrong credentials'});
      } else {
        const token = jwt.sign({id: users._id}, 'super', {
          expiresIn: 86400,
        });
        return resolve({'user': data.username, 'token': token});
      }
    });
  });
};
module.exports = {
  createUser: createUser,
  authLogin: authLogin,
};


