class ErrorResponse extends Error {
  constructor(message, statusCode) {
    //calling constructor of extended class
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
