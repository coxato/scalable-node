const router = require("express").Router();
const response = require("../../../network/response");
const controller = require("./index");

// ===== routes =====

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);

// ===== route functions =====

function getUsers(req, res){
    controller.listUsers()
        .then( users => response.success(req, res, users) )
        .catch( err => response.error(req, res, err.message) )
}

function getUserById(req, res){
    controller.getUser(req.params.id)
        .then( user => response.success(req, res, user) )
        .catch( err => response.error(req, res, err.message) )
}

function createUser(req, res){
    controller.createUser(req.body)
        .then( () => response.success(req, res, 'user created') )
        .catch( err => response.error(req, res, err.message) )
}

function deleteUser(req, res){
    controller.deleteUser(req.params.id)
        .then( (deletedId) => response.success(req, res, `user with id ${deletedId} deleted`) )
        .catch( err => response.error(req, res, err.message) )
}

module.exports = router;