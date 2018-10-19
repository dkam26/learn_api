import jwt from 'jsonwebtoken';
const validateToken = (data) =>{
  return new Promise((resolve, reject) =>{
    if (!data) {
      return reject({'Message': 'Missing token'});
    }
    jwt.verify(data, 'super', function(err, decoded) {
      if (err) {
        return reject({
          auth: false,
          message: 'Failed to authenticate token.',
        });
      }
      return resolve(true);
    });
  });
};
export default validateToken;
