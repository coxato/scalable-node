function success(req, res, dataOrMessage = '', status = 200){
    res.status(status).send({
        error: false,
        status,
        body: dataOrMessage
    });
}


function error(req, res, err){
    const status = err.statusCode || 500;
    
    res.status(status).send({
        error: true,
        status,
        body: err.message || 'internal server error'
    });
}

module.exports = {
    success,
    error
}