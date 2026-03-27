/**
 *
 * @param {Object} obj
 * @returns Converts a query object to an array of query strings.
 */
function buildQueryString(obj) {
    return Object.keys(obj).map((val) => {
        return `${val}=${obj[val]}`;
    });
}

module.exports = {
    buildQueryString,
};
