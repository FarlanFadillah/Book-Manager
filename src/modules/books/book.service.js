const bookRepo = require("./book.repository");
const pagination = require("../../utils/pagination");
const { ExpressError } = require("../../utils/error");
const { buildQueryString } = require("./book.helper");

/**
 *
 * @param {Object} model
 * @returns
 */
async function addBook(model) {
    try {
        return await bookRepo.insertBook(model);
    } catch (error) {
        throw error;
    }
}

/**
 *
 * @param {Number} id
 * @param {Object} model
 */
async function updateBook(id, model) {
    try {
        await bookRepo.getBookById(id); // to check whether the book with the specified id exists in the database.
        await bookRepo.updateBook(id, model);
    } catch (error) {
        throw error;
    }
}

/**
 *
 * @param {Number} id
 */
async function removeBook(id) {
    try {
        const result = await bookRepo.deleteBook(id);
        if (!result) throw new ExpressError("Book not found", 404);
    } catch (error) {
        throw error;
    }
}

/**
 *
 * @param {Number} id
 * @returns
 */
async function getBookById(id) {
    try {
        return await bookRepo.getBookById(id);
    } catch (error) {
        throw error;
    }
}

/**
 *
 * @param {Number} page
 * @param {Number} limit
 * @param {Object} filters
 * @returns
 */
async function getBooks(page, limit, filters) {
    try {
        const { offset } = pagination.paginate(page, limit);
        let result;
        // check if filter is not empty
        if (Object.keys(filters).length === 0) {
            result = await bookRepo.getBooks(limit, offset);
        } else {
            result = await bookRepo.filterBooks(limit, offset, filters);
        }
        // if result empty throw Not Found error
        if (!result) throw new ExpressError("Not Found", 404);
        const { data, count } = result;

        const meta = pagination.paginationMetadata(
            "books",
            page,
            limit,
            count,
            buildQueryString(filters),
        );

        return { data, meta };
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addBook,
    updateBook,
    removeBook,
    getBookById,
    getBooks,
};
