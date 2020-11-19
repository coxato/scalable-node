const router = require("express").Router();
const response = require("../../../network/response");
const controller = require("./index");

// ===== routes =====

router.post("/login", login);

// ===== routes functions =====

function login(req, res) {
    const { username, password } = req.body;
    
    controller.login(username, password)
        .then( token => response.success(req, res, {token}))
        .catch( err => response.error(req, res, err.message));
}

module.exports = router;
