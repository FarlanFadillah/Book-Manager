const { User } = require("../../db/models");
const { ExpressError } = require("../../utils/error");

async function getByUsername(username) {
    try {
        return await User.findOne({
            where: {
                username,
            },
        });
    } catch (error) {
        throw new ExpressError(error.message);
    }
}

module.exports = {
    getByUsername,
};
