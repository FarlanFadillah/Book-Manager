const { User } = require("../../db/models");
const { ExpressError } = require("../../utils/error");

/**
 *
 * @param {String} username
 * @returns one single user with specified username
 */
async function getByUsername(username) {
    try {
        return await User.findOne({
            where: {
                username,
            },
        });
    } catch (error) {
        throw new ExpressError(error.message, error.statusCode || 400);
    }
}

module.exports = {
    getByUsername,
};
