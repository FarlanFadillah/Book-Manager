const express = require("express");
const authController = require("./auth.controller");
const valRules = require("./auth.validator");
const { validate } = require("../../middlewares/validation.middleware");

const router = express.Router();

router.post(
    "/login",
    ...valRules.loginValidationRules,
    validate,
    authController.login,
);

module.exports = router;
