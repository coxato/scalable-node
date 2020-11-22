const router = require("express").Router();
const response = require("../../../network/response");
const controller = require("./index");

// ===== routes =====

router.post("/login", login);

// ===== routes functions =====

function login(req, res, next) {
    const { username, password } = req.body;
    
    controller.login(username, password)
        .then( token => response.success(req, res, {token}))
        .catch(next);
}

module.exports = router;
