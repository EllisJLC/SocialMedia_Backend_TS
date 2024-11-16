const { checkSchema, validationResult, body} = require('express-validator');
const User = require('../models/User');

const withValidationErrors = (validateValue: {}) => {
  return [
    validateValue,
    (req, res, next) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new Error
      }
    }
  ]
}