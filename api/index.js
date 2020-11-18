const { PORT } = require("../config");
const express = require("express");
// services
const user = require("./components/user/network");

const app = express();

app.use("/api/user", user);

app.listen(PORT, () => console.log("api running in localhost:" + PORT));