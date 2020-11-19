const response = require("./response");

// error middleware
function errorMiddleware(err, req, res, next) {
    console.error('[error]', err);

    const statusCode = err.statusCode || 500;
    const  message = err.message || 'internal server error';

    response.error(req, res, message, statusCode);
}

module.exports = errorMiddleware;