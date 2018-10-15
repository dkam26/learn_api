const fields = {
  createUser: ['username', 'firstname', 'secondname', 'password', 'email'],
};
const vadilateUser = (user) => {
  const userKeys = Object.keys(user);
  const requiredFields = fields['createUser'];
  return new Promise((resolve, reject) => {
    requiredFields.forEach((field) => {
      if (!userKeys.includes(field)) {
        return reject(`Missing field ${field}`);
      }
    });
    return resolve(true);
  });
};
export default vadilateUser;
