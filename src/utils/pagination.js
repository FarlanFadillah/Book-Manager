/**
 *
 * @param {Number} currentpage
 * @param {Number} limit
 * @param {Number} total
 * @param {Array} additions
 * @returns {Object} return pagination metadata
 */
function paginationMetadata(endpoint, currentpage, limit, total, additions) {
    const total_page = Math.ceil(Number(total) / Number(limit));
    return {
        page: Number(currentpage),
        total_count: total,
        total_page,
        per_page: limit,
        links: {
            next:
                Number(currentpage) >= total_page
                    ? null
                    : genPaginationEndpoint(
                          endpoint,
                          currentpage + 1,
                          limit,
                          additions,
                      ),
            self: genPaginationEndpoint(
                endpoint,
                currentpage,
                limit,
                additions,
            ),
            prev:
                Number(currentpage) <= 1
                    ? null
                    : Number(currentpage) > total_page
                      ? genPaginationEndpoint(
                            endpoint,
                            Math.ceil(Number(total) / Number(limit)),
                            limit,
                            additions,
                        )
                      : genPaginationEndpoint(
                            endpoint,
                            currentpage - 1,
                            limit,
                            additions,
                        ),
            last: genPaginationEndpoint(
                endpoint,
                Math.ceil(Number(total) / Number(limit)),
                limit,
                additions,
            ),
        },
    };
}

/**
 *
 * @param {String} name
 * @param {Number} currentpage
 * @param {Number} limit
 * @param {Array} additions
 * @returns
 */
function genPaginationEndpoint(name, currentpage, limit, additions) {
    return (
        `/api/v1/${name}?page=${currentpage}&limit=${limit}` +
        (additions ? `&${additions.join("&")}` : "")
    );
}

/**
 *
 * @param {Number} page
 * @param {Number} limit
 * @returns limit and offset for pagination
 */
function paginate(page, limit) {
    const offset = (page - 1) * limit;
    return { limit, offset };
}

module.exports = {
    paginationMetadata,
    paginate,
};
