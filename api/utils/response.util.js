const statusCodes={'Success': 201, 'Error': 400};


const responseData = (res, data, code) =>{
  res.status(statusCodes[code])
      .json(data);
};

module.exports = {
  responseData: responseData,
};
