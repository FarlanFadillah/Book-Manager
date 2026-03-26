const { check, validationResult } = require("express-validator");
/**
 *
 * @param {String} field
 */
function stringRequired(field) {
    return check(field)
        .trim()
        .notEmpty()
        .withMessage(`${field} can't be empty`)
        .matches(/^[^<>]*$/)
        .withMessage(field + " cant contain html element");
}

/**
 *
 * @param {String} field
 */
function stringOptional(field) {
    return check(field)
        .optional()
        .trim()
        .matches(/^[^<>]*$/)
        .withMessage(field + " cant contain html element");
}

/**
 *
 * @param {String} field
 */
function numericalRequired(field) {
    return check(field)
        .notEmpty()
        .withMessage(`${field} can't be empty`)
        .isNumeric()
        .withMessage(`${field} must be a numeric`);
}

/**
 *
 * @param {String} field
 */
function numericalOptional(field) {
    return check(field)
        .optional()
        .isNumeric()
        .withMessage(`${field} must be a numeric`);
}

module.exports = {
    numericalOptional,
    numericalRequired,
    stringOptional,
    stringRequired,
};
