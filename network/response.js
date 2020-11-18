function success(req, res, dataOrMessage = '', status = 200){
    res.status(status).send({
        error: false,
        status,
        body: dataOrMessage
    });
}


function error(req, res, dataOrMessage = "Internal server error", status = 500){
    res.status(status).send({
        error: true,
        status,
        body: dataOrMessage
    });
}

module.exports = {
    success,
    error
}