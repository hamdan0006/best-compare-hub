const { body, validationResult } = require('express-validator');

const validateContact = [
    body('Username')
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3 }).withMessage("Name should be at least 3 characters long"),

    body('State')
        .notEmpty().withMessage('State is required'),

    body('Email')
        .isEmail().withMessage('Please enter a valid email'),


];

const checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateContact, checkValidation };
