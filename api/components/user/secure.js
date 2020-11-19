const auth = require("../../../auth");
const err = require("../../../utils/error");

// returns a secure middleware, do something depens the action
module.exports = function checkAuth(action) {

    return function checkPermissions(req, res, next) {
        switch (action) {
            case 'update':
                auth.check.owner(req, req.body.id);
                next();
                break;

            default:
                throw err('no action specified in checkPermissions', 500);
        }
    }
}