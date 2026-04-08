const successResponse = (res, data, message = "Success") => {
  res.status(200).json({
    status: true,
    message,
    data,
  });
};

const errorResponse = (res, message = "Error") => {
  res.status(500).json({
    status: false,
    message,
  });
};

module.exports = { successResponse, errorResponse };