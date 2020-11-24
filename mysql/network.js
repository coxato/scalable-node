const router = require("express").Router();
const response = require("../network/response");
const store = require("../store/mysql");

// microservice routes

router.get("/list/:table", list);
router.get("/get/:table/:id", get);
router.get("/getBy/:table/:property/:compareData", getBy);
router.get("/query/:table/:toArray", query);

router.post("/insert/:table", insert);

router.put("/update/:table/:id", update);

router.delete("/delete/:table/:id", remove);

// routes handler functions

function list(req, res, next){
    store.list(req.params.table)
        .then( data => response.success(req, res, data, 200))
        .catch(next)
}


function get(req, res, next){
    const { table, id } = req.params;

    store.get(table, id)
        .then( data => response.success(req, res, data, 200))
        .catch(next)
}


function getBy(req, res, next){
    const { table, id, compareData } = req.params;

    store.getBy(table, id, compareData)
        .then( data => response.success(req, res, data, 200))
        .catch(next)
}


function query(req, res, next){
    const { table, toArray } = req.params;
    const { query, join } = req.body; 

    store.query(table, query, join, toArray)
        .then( data => response.success(req, res, data, 200))
        .catch(next)
}


function insert(req, res, next){
    store.insert(req.params.table, req.body)
        .then( data => response.success(req, res, data, 200))
        .catch(next)
}


function update(req, res, next){
    const { table, id } = req.params;

    store.update(table, id, req.body)
        .then( data => response.success(req, res, data, 200))
        .catch(next)
}


function remove(req, res, next){
    const { table, id } = req.params;

    store.remove(table, id)
        .then( data => response.success(req, res, data, 200))
        .catch(next)
}


module.exports = router;