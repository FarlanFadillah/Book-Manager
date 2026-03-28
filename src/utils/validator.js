const { check, body, param, query } = require("express-validator");

const validator = {
    body,
    param,
    query,
};

/**
 *
 * @param {String} field
 * @param {"body" | "param" | "query"} location
 */
function stringRequired(field, location = "body") {
    return validator[location](field)
        .trim()
        .notEmpty()
        .withMessage(`${field} can't be empty`)
        .matches(/^[^<>]*$/)
        .withMessage(field + " cant contain html element");
}

/**
 *
 * @param {String} field
 * @param {"body" | "param" | "query"} location
 */
function stringOptional(field, location = "body") {
    return validator[location](field)
        .optional()
        .trim()
        .matches(/^[^<>]*$/)
        .withMessage(field + " cant contain html element");
}

/**
 *
 * @param {String} field
 * @param {"body" | "param" | "query"} location
 */
function numericalRequired(field, location = "body") {
    return validator[location](field)
        .notEmpty()
        .withMessage(`${field} can't be empty`)
        .isNumeric()
        .withMessage(`${field} must be a numeric`);
}

/**
 *
 * @param {String} field
 * @param {"body" | "param" | "query"} location
 */
function numericalOptional(field, location = "body") {
    return validator[location](field)
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
