const request = require("request");
const promisify = require("util").promisify;


function RemoteDb(host, port, prefixUrl = '', https = false){
    
    let _http = `http${https ? 's' : ''}://`,
        _prefixUrl = `${prefixUrl ? '/'+prefixUrl : ''}`,
        baseURL = `${_http}${host}:${port}${_prefixUrl}`;


    // ===== CRUD functions =====
    async function list(table){
        return await _fetchDB('GET', `list/${table}`);
    }

    async function get(table, id){
        return await _fetchDB('GET', `get/${table}/${id}`);
    }

    async function query(table, query, join, toArray){
        return await _fetchDB('GET', `query/${table}/${toArray}`, {query, join});
    }



    // fetch the microservice
    async function _fetchDB(method, endpoint, body = undefined){
        const url = baseURL + '/' + endpoint;
        
        try {
            const resp = await promisify(request)(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body || {})
            });

            const data = JSON.parse(resp.body);
            return data.body;
            
        } catch (error) {
            console.error('remote db error', error);
            throw error.message;
        }
    }

    return {
        list,
        get,
        query
    }

}


module.exports = RemoteDb;