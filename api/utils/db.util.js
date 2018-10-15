import User from '../models/user.model';

const createUser = ( data) => {
  return new Promise((resolve, reject) => {
    const user = new User(data);
    user.save();
    return resolve(data.username);
  });
};
export default createUser;
