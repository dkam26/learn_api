const responseCreate = (res, data) => {
  res.status(201)
      .json({Message: `User successfully added!,${data}`});
};

const responseError = (res, data) => {
  res.status(400)
      .json({Message: `${data}`});
};

const responseLogin = (res, data) => {
  res.status(201)
      .json(data);
};

const responseLoginError = (res, data) =>{
  res.status(401)
      .json(data);
};

const responseData = (res, data) =>{
  res.status(201)
      .json(data);
};
module.exports = {
  responseCreate: responseCreate,
  responseError: responseError,
  responseLogin: responseLogin,
  responseLoginError: responseLoginError,
  responseData: responseData,
};


