const store = require("../../../store/mysql");
const controller = require("./controller");

// injected store
module.exports = controller(store);