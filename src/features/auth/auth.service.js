const authRepo = require("./auth.repository");
const crypt = require("../../utils/crypt");
const jwt = require("../../utils/jwt");

async function login(username, password) {
    try {
        const user = await authRepo.getByUsername(username);
        if (!user) throw new Error("Username not found");

        const match = await crypt.verifyHash(password, user.hash);
        if (!match) throw new Error("Password and Username mismatch");

        const token = await jwt.generateToken({ username });

        return { token };
    } catch (error) {
        throw error;
    }
}

module.exports = {
    login,
};
