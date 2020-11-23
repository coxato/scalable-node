const auth = require("../../../auth");
const err = require("../../../utils/error");

// returns a secure middleware, do something depens the action
module.exports = function checkAuth(action) {

    return function checkPermissionsUser(req, res, next) {
        switch (action) {
            case 'update':
                // the user only can update itself, not other id
                auth.check.owner(req, req.params.id);
                next();
                break;

            case 'follow':
                auth.check.logged(req);
                next();
                break;

            default:
                throw err('no action specified in checkPermissions', 500);
        }
    }
}