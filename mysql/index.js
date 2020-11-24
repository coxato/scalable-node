const express = require("express");
const routes = require("./network");

const app = express();

app.use(express.json());
app.use("/microservice/mysql", routes);

app.listen(5001, () => {
    console.log("mysql service running in port 5001");
})