const asyncHandler = require("../utils/asyncHandler");
const { ExpressError } = require("../utils/error");
const jwt = require("../utils/jwt");
const validateToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return next(new ExpressError("Unauthorized: No token provided", 401));

    const token = authHeader.split(" ")[1];
    const decoded = await jwt.verifyToken(token);
    console.log("[TOKEN VALID]");
    req.user = decoded;
    next();
});

module.exports = {
    validateToken,
};
