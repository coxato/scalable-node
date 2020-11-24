const RemoteDb = require("./remote");

const host = "localhost";
const port = 5001;
const prefixUrl = "microservice/mysql";

module.exports = new RemoteDb(host, port, prefixUrl);