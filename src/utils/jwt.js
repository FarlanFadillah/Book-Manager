const jwt = require("jsonwebtoken");
const { ExpressError } = require("./error");
const JWT_KEY = process.env.JWT_KEY || "secret-key";
async function generateToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            JWT_KEY,
            { algorithm: "HS256", expiresIn: "5h" },
            (err, encoded) => {
                if (err) reject(new ExpressError("JWT FAILED:" + err.message));
                else resolve(encoded);
            },
        );
    });
}

async function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_KEY, (err, decoded) => {
            if (err) reject(new ExpressError("JWT FAILED: " + err.message));
            else resolve(decoded);
        });
    });
}

module.exports = {
    generateToken,
    verifyToken,
};
