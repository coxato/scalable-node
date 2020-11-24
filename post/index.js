const config = require("../config");
const express = require("express");
// services routes
const post = require("./components/post/network");
const errorMiddleware = require("../network/errors");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/post", post);
app.use(errorMiddleware);

app.listen(config.post.PORT, () => console.log("api running in localhost:" + config.post.PORT));