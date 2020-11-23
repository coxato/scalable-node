const router = require("express").Router();
const response = require("../../../network/response");
const controller = require("./index");
// middlewares
const checkAuth = require("./secure");

// ===== routes =====

router.get("/", getUsers);
router.get("/:id", getUserById);
router.get("/followers/:id", getFollowers)

router.post("/", createUser);
router.post("/follow/:id", checkAuth('follow'), followUser);

router.put("/:id", checkAuth('update'), updateUser);

router.delete("/:id", deleteUser);

// ===== route functions =====

function getUsers(req, res, next){
    controller.listUsers()
        .then( users => response.success(req, res, users) )
        .catch(next)
}

function getUserById(req, res, next){
    controller.getUserById(req.params.id)
        .then( user => response.success(req, res, user) )
        .catch(next)
}

function getFollowers(req, res, next){
    controller.getFollowers(req.params.id)
        .then( user => response.success(req, res, user) )
        .catch(next)
}

function createUser(req, res, next){
    controller.createUser(req.body)
        .then(() => response.success(req, res, 'user created'))
        .catch(next)
}

function followUser(req, res, next){
    controller.followUser(req.user.id, req.params.id)
        .then( message => response.success(req, res, message, 201))
        .catch(next);
}

function updateUser(req, res, next) {
    const { id } = req.params; 
    controller.updateUser(id, req.body)
        .then(() => response.success(req, res, 'user updated'))
        .catch(next)
}

function deleteUser(req, res, next){
    controller.deleteUser(req.params.id)
        .then( (deletedId) => response.success(req, res, `user with id ${deletedId} deleted`) )
        .catch(next)
}

module.exports = router;