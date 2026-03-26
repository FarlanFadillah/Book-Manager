const express = require("express");
const { login } = require("./auth.controller");
const { loginValidationRules } = require("./auth.validator");
const { validate } = require("../../middlewares/validation.middleware");

const router = express.Router();

router.post("/login", ...loginValidationRules, validate, login);

module.exports = router;
