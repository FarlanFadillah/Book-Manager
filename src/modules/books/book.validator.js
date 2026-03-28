const validator = require("../../utils/validator");

const addBookValidationRules = [
    validator.stringRequired("title"),
    validator.stringRequired("author"),
    validator
        .numericalRequired("year")
        .isLength({ min: 1, max: 4 })
        .withMessage("Invalid year value"),
];

const idValidationRules = [validator.numericalRequired("id", "param")];

const paginationValidationRules = [
    validator.numericalRequired("page", "query"),
    validator.numericalOptional("limit", "query"),
];
const filtersValidationRules = [
    validator.stringOptional("title", "query"),
    validator.stringOptional("author", "query"),
    validator
        .numericalOptional("year", "query")
        .isLength({ min: 1, max: 4 })
        .withMessage("Invalid year value"),
    validator
        .numericalOptional("yearFrom", "query")
        .isLength({ min: 1, max: 4 })
        .withMessage("Invalid year value"),
    validator
        .numericalOptional("yearTo", "query")
        .isLength({ min: 1, max: 4 })
        .withMessage("Invalid year value"),
];
module.exports = {
    addBookValidationRules,
    idValidationRules,
    paginationValidationRules,
    filtersValidationRules,
};
