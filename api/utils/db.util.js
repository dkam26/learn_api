import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import Data from '../models/data.model';

const createUser = ( data) => {
  return new Promise((resolve, reject) => {
    User.find({'username': data.username}, (err, users) =>{
      if (users.length > 0) {
        return reject(
            `User already exists, ${data.username }`
        );
      } else {
        const user = new User(data);
        user.save();
        return resolve(data.username);
      }
    });
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
const storeData = (data) => {
  return new Promise((resolve, reject) =>{
    const dataToSave = new Data();
    dataToSave.save();
    return resolve({Message: 'Saved!'});
  });
};
module.exports = {
  createUser: createUser,
  authLogin: authLogin,
  storeData: storeData,
};


