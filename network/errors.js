const response = require("./response");

// error middleware
function errorMiddleware(err, req, res, next) {
    console.error('[error]', err);

    response.error(req, res, err);
}

module.exports = errorMiddleware;