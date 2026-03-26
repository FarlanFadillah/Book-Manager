const { User } = require("../../models");

async function getByUsername(username) {
    try {
        return await User.findOne({
            where: {
                username,
            },
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getByUsername,
};
