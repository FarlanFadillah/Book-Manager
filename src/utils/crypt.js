const bcrypt = require("bcrypt");

async function hashing(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) reject(err);
            else resolve(hash);
        });
    });
}

async function verifyHash(password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

module.exports = {
    hashing,
    verifyHash,
};
