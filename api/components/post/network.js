const router = require("express").Router();
const response = require("../../../network/response");
const controller = require("./index");
// middleware
const securePostMiddleware = require("./secure");

// ===== routes =====

router.post("/", securePostMiddleware('create'), createPost);

// ===== routes functions =====

function createPost(req, res, next) {
    const { id } = req.user;

    controller.createPost(id, req.body)
        .then( data => response.success(req, res, {data}))
        .catch(next);
}

module.exports = router;