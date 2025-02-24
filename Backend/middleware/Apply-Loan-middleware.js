const { body, validationResult } = require('express-validator');

const validateLoan = [
    body('FirstName')
        .notEmpty().withMessage('First Name is required')
        .isLength({ min: 3 }).withMessage('First Name should be at least 3 characters long'),

    body('LastName')
        .notEmpty().withMessage('Last Name is required') // Fixed the message here
        .isLength({ min: 3 }).withMessage('Last Name should be at least 3 characters long'),

    body('Email')
        .isEmail().withMessage('Please enter a valid email'),

    body('PhoneNumber')
        .notEmpty().withMessage('Phone Number is required') // Fixed the message here
        .isLength({ min: 9, max: 20 }).withMessage('Phone Number must be 9 digits long'), 

    body('State')
        .notEmpty().withMessage('State is required') 
];

const checkLoanValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateLoan, checkLoanValidation };
