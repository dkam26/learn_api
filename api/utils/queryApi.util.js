import request from 'request';

const searchLocation = (location) => {
  return new Promise((resolve, reject) =>{
    request(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyA6k2H0USbJYFOvcrBwEBbmlXZ0cVUbGuA`,
        {json: true},
        (res, body) =>{
          return resolve( body['body']);
        });
  });
};

const getLocation = (data) => {
  const coordinates = data;
  return new Promise((resolve, reject) =>{
    return resolve(coordinates['results'][0]['geometry']['location']);
  });
};

module.exports = {
  searchLocation: searchLocation,
  getLocation: getLocation,
};
