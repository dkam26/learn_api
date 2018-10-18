const validateInput = (input) => {
  return new Promise((resolve, reject) => {
    const expectedKey = 'location';
    const requiredKey = Object.keys(input)[0];
    if (expectedKey === requiredKey) {
      if (typeof input[expectedKey] === 'string') {
        return resolve(true);
      } else {
        return reject(`Should be a string`);
      }
    } else {
      return reject('Location field missing');
    }
  });
};
export default validateInput;
