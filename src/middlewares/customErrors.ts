const StatusCodes = require('http-status-codes');

interface Error {
  statusCode?: number;
}

module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Unauthenticated_error';
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}