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
const storeData = (data, token) => {
  return new Promise((resolve, reject) =>{
    jwt.verify(token, 'super', function(err, decoded) {
      User.findOne({'_id': decoded.id}, (err, user) =>{
        data['owner'] = user._id;
        const dataToSave = new Data(data);
        dataToSave.save();
        return resolve({Message: 'Saved!'});
      });
    });
  });
};
const query = (token) => {
  return new Promise((resolve, reject) =>{
    jwt.verify(token, 'super', function(err, decoded) {
      User.findOne({'_id': decoded.id}, (err, user) =>{
        Data.find({'owner': user['_id']}, (err, list) =>{
          return resolve(list);
        });
      });
    });
  });
};
module.exports = {
  createUser: createUser,
  authLogin: authLogin,
  storeData: storeData,
  query: query,
};
