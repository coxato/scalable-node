// const store = require("../../../store/mysql");
const store = require("../../../store/remoteMysql");
const controller = require("./controller");

// injected store
module.exports = controller(store);