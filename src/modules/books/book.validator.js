const validator = require("../../utils/validator");

const addBookValidationRules = [
    validator.stringRequired("title"),
    validator.stringRequired("author"),
    validator
        .numericalRequired("year")
        .isLength({ min: 1, max: 4 })
        .withMessage("Invalid year value"),
];

const idValidationRules = [validator.numericalRequired("id")];

const paginationValidationRules = [
    validator.numericalRequired("page"),
    validator.numericalOptional("limit"),
];
const filtersValidationRules = [
    validator.stringOptional("title"),
    validator.stringOptional("author"),
    validator
        .numericalOptional("year")
        .isLength({ min: 1, max: 4 })
        .withMessage("Invalid year value"),
    validator
        .numericalOptional("yearFrom")
        .isLength({ min: 1, max: 4 })
        .withMessage("Invalid year value"),
    validator
        .numericalOptional("yearTo")
        .isLength({ min: 1, max: 4 })
        .withMessage("Invalid year value"),
];
module.exports = {
    addBookValidationRules,
    idValidationRules,
    paginationValidationRules,
    filtersValidationRules,
};
