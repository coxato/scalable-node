const { PORT } = require("../config");
const express = require("express");
// services routes
const user = require("./components/user/network");
const auth = require("./components/auth/network");
const errorMiddleware = require("../network/errors");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use(errorMiddleware);

app.listen(PORT, () => console.log("api running in localhost:" + PORT));