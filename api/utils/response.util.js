const responseCreate = (res, data) => {
  res.status(201)
      .json({Message: `User successfully added!,${data}`});
};

const responseError = (res, data) => {
  res.status(400)
      .json({Message: `${data}`});
};
module.exports = {
  responseCreate: responseCreate,
  responseError: responseError,
};


