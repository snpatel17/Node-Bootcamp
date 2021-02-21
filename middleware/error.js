const { Error } = require('mongoose');
const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  // Log to console for developer
  console.log(err.stack.red);

  // Mongoose bad ObjectID
  if (err.name === 'CastError') {
    const message = `Bootcamp not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  //Mongoose Validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => message);
    error = new ErrorResponse(message, 400);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server error',
  });
};

module.exports = errorHandler;
