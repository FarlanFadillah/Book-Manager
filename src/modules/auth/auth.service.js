const authRepo = require("./auth.repository");
const crypt = require("../../utils/crypt");
const jwt = require("../../utils/jwt");
const { ExpressError } = require("../../utils/error");

/**
 *
 * @param {String} username
 * @param {String} password
 * @returns JWT token generated for authorization
 */
async function login(username, password) {
    try {
        const user = await authRepo.getByUsername(username);
        if (!user) throw new ExpressError("Username not found", 404);

        const match = await crypt.verifyHash(password, user.hash);
        if (!match)
            throw new ExpressError("Password and Username mismatch", 401);

        const token = await jwt.generateToken({ username });

        return { token };
    } catch (error) {
        throw error;
    }
}

module.exports = {
    login,
};
