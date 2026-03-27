const asyncHandler = require("../../utils/asyncHandler");
const bookService = require("./book.service");

const addBook = asyncHandler(async (req, res, next) => {
    const data = await bookService.addBook(req.matchedData);

    res.status(200).json({
        success: true,
        message: "Book added successfully",
        data,
    });
});

const updateBook = asyncHandler(async (req, res, next) => {
    const { id, ...model } = req.matchedData;
    await bookService.updateBook(id, model);

    res.status(200).json({
        success: true,
        message: "Book updated successfully",
    });
});

const removeBook = asyncHandler(async (req, res, next) => {
    const { id } = req.matchedData;
    await bookService.removeBook(id);

    res.status(200).json({
        success: true,
        message: "Book deleted successfully",
    });
});

const getBookById = asyncHandler(async (req, res, next) => {
    const { id } = req.matchedData;
    const data = await bookService.getBookById(id);

    res.status(200).json({
        success: true,
        data,
    });
});

const getBooks = asyncHandler(async (req, res, next) => {
    const { page, limit, ...filters } = req.matchedData;
    const { data, meta } = await bookService.getBooks(
        Number(page),
        Number(limit),
        filters,
    );

    res.status(200).json({
        success: true,
        data,
        meta,
    });
});

module.exports = {
    addBook,
    updateBook,
    removeBook,
    getBookById,
    getBooks,
};
