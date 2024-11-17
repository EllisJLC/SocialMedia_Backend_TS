const { checkSchema, validationResult, body} = require('express-validator');
const User = require('../models/User');

const BadRequestError = require('./customErrors');

const withValidationErrors = (validateValue: {}) => {
  return [
    validateValue,
    (req, res, next) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages)
      }
    }
  ]
}

const validateRegistration = withValidationErrors([
  body('firstName').notEmpty().withMessage('First name required'),
  body('lastName').notEmpty().withMessage('Last name required'),
  body('email')
    .notEmpty()
    .withMessage('Email required')
    .isEmail()
    .withMessage('Email is invalid')
    .custom(async (email: string) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('Email already in use');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('Please enter an email')
    .custom( async (password: string) => {
      if(password.length <= 6) {
        throw new BadRequestError('Password must be at least 6 characters long')
      }
    })
]);

const validateLogin = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('Enter an email')
    .isEmail()
    .withMessage('Email invalid'),
  body('password').notEmpty().withMessage('Please enter your password')
]);

const validatePost = withValidationErrors([
  body('content').notEmpty().withMessage('Please enter something to post'),
  body('postedBy')
    .notEmpty()
    .withMessage('Poster unknown')
    .custom(async (userId: string) => {
      const user = await User.findOne({ userId });
      if (!user) {
        throw new BadRequestError('User unknown');
      }
    })
])


export default {
  validateRegistration,
  validateLogin,
  validatePost
}