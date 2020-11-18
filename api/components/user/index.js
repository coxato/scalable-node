const store = require("../../../store/dummy");
const controller = require("./controller");

// injected store
module.exports = controller(store);