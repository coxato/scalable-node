const auth = require("../../../auth");
const err = require("../../../utils/error");

function postSecureMiddleware(action){
    return function checkPermissionsPost(req, res, next){
        switch (action) {
            case 'create':
                auth.check.logged(req);
                next();
                break;
        
            default:
                throw err(`bad secure action: [${action}]`);
        }
    }
}

module.exports = postSecureMiddleware;