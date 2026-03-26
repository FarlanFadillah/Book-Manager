const asyncHandler = require("../../utils/asyncHandler");
const authService = require("./auth.service");

const login = asyncHandler(async (req, res, next) => {
    const { username, password } = req.matchedData;
    const { token } = await authService.login(username, password);

    res.status(200).json({
        success: true,
        message: "You have successfully logged in.",
        token,
    });
});

module.exports = {
    login,
};
