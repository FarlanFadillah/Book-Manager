function globalErrorHandler(err, req, res, next) {
    console.log("[GLOBAL ERROR HANDLER]");
    console.log(err);
    res.status(err.statusCode || 400).json({
        success: false,
        msg: err.message,
    });
}

module.exports = {
    globalErrorHandler,
};
