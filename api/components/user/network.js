const router = require("express").Router();
const response = require("../../../network/response");
const controller = require("./index");
// middlewares
const checkAuth = require("./secure");

// ===== routes =====

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", checkAuth('update'), updateUser);
router.delete("/:id", deleteUser);
// ===== route functions =====

function getUsers(req, res){
    controller.listUsers()
        .then( users => response.success(req, res, users) )
        .catch( err => response.error(req, res, err) )
}

function getUserById(req, res){
    controller.getUser(req.params.id)
        .then( user => response.success(req, res, user) )
        .catch( err => response.error(req, res, err) )
}

function createUser(req, res){
    controller.createUser(req.body)
        .then(() => response.success(req, res, 'user created'))
        .catch( err => response.error(req, res, err) )
}

function updateUser(req, res) {
    const { id } = req.params; 
    controller.updateUser(id, req.body)
        .then(() => response.success(req, res, 'user updated'))
        .catch( err => response.error(req, res, err) )
}

function deleteUser(req, res){
    controller.deleteUser(req.params.id)
        .then( (deletedId) => response.success(req, res, `user with id ${deletedId} deleted`) )
        .catch( err => response.error(req, res, err) )
}

module.exports = router;