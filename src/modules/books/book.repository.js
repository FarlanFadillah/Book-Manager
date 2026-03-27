const { Book } = require("../../db/models");
const { ExpressError } = require("../../utils/error");
const { Op } = require("sequelize");

/**
 *
 * @param {Object} model
 * @returns Returns the data that has been entered
 */
async function insertBook(model) {
    try {
        const data = await Book.create(model);
        return data.toJSON();
    } catch (error) {
        throw new ExpressError(error.message, error.statusCode || 400);
    }
}

/**
 *
 * @param {Number} id
 * @param {Object} model
 */
async function updateBook(id, model) {
    try {
        await Book.update(model, { where: { id } });
    } catch (error) {
        throw new ExpressError(error.message, error.statusCode || 400);
    }
}

/**
 *
 * @param {Number} id
 * @returns a boolean whether it was successfully deleted or not
 */
async function deleteBook(id) {
    try {
        return await Book.destroy({ where: { id } });
    } catch (error) {
        throw new ExpressError(error.message, error.statusCode || 400);
    }
}

/**
 *
 * @param {Number} id
 * @returns one single book with specified id
 */
async function getBookById(id) {
    try {
        const data = await Book.findOne({ where: { id } });
        if (!data) throw new ExpressError("Book not found", 404);
        return data.toJSON();
    } catch (error) {
        throw new ExpressError(error.message, error.statusCode || 400);
    }
}

/**
 *
 * @param {Number} limit
 * @param {Number} offset
 * @returns list of book data and quantity
 */
async function getBooks(limit, offset) {
    try {
        const { count, rows } = await Book.findAndCountAll({ limit, offset });
        return {
            data: rows.map((val) => val.toJSON()),
            count,
        };
    } catch (error) {
        throw new ExpressError(error.message, error.statusCode || 400);
    }
}

/**
 *
 * @param {Number} limit
 * @param {Number} offset
 * @param {Object} filters
 * @returns filtered list of data, and the amount
 */
async function filterBooks(limit, offset, filters) {
    try {
        const where = {};

        // Filtered by book's title
        if (filters.title) {
            where.title = {
                [Op.like]: `%${filters.title}%`,
            };
        }

        // Filtered by author name
        if (filters.author) {
            where.author = {
                [Op.like]: `%${filters.author}%`,
            };
        }

        // Filtered by year range
        if (filters.yearFrom && filters.yearTo) {
            where.year = {
                [Op.gte]: filters.yearFrom,
                [Op.lte]: filters.yearTo,
            };
        }
        const { count, rows } = await Book.findAndCountAll({
            where,
            offset,
            limit,
            order: [["year", "ASC"]],
        });

        return {
            data: rows.map((val) => val.toJSON()),
            count,
        };
    } catch (error) {}
}

module.exports = {
    insertBook,
    updateBook,
    deleteBook,
    getBookById,
    getBooks,
    filterBooks,
};
