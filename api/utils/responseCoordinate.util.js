const responseCoordinates = (res, data) => {
  res.status(201)
      .json(data);
};

const responseWeather = (res, data) => {
  res.status(201)
      .json(data);
};

const responseTokenError = (res, data) =>{
  res.status(401)
      .json(data);
};
module.exports = {
  responseCoordinates: responseCoordinates,
  responseWeather: responseWeather,
  responseTokenError: responseTokenError,
};
