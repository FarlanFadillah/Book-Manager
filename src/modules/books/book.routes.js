const express = require("express");
const bookController = require("./book.controller");
const valRules = require("./book.validator");
const { validate } = require("../../middlewares/validation.middleware");
const { validateToken } = require("../../middlewares/jwt.middleware");
const router = express.Router();
router.use(validateToken);
router
    .route("/")
    .post(...valRules.addBookValidationRules, validate, bookController.addBook)
    .get(
        ...valRules.paginationValidationRules,
        ...valRules.filtersValidationRules,
        validate,
        bookController.getBooks,
    );

router
    .route("/:id")
    .delete(...valRules.idValidationRules, validate, bookController.removeBook)
    .put(
        ...valRules.addBookValidationRules,
        ...valRules.idValidationRules,
        validate,
        bookController.updateBook,
    )
    .get(...valRules.idValidationRules, validate, bookController.getBookById);

module.exports = router;
