const validator = require("../../utils/validator");

const loginValidationRules = [
    validator.stringRequired("username"),
    validator.stringRequired("password"),
];

module.exports = {
    loginValidationRules,
};
