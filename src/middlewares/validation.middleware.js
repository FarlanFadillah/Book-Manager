const { validationResult, matchedData } = require("express-validator");

function validate(req, res, next) {
    const result = validationResult(req);

    if (result.isEmpty()) {
        console.log("[REQUEST VALID]");
        req.matchedData = matchedData(req);
        return next();
    }

    const errors = {};
    result.errors.map((data) => (errors[data.path] = data.msg));

    res.status(200).json({ status: false, msg: "validation failed", errors });
}

module.exports = {
    validate,
};
