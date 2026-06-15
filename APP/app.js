const express = require("express");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("E-Commerce Backend Running");
});

app.use("/users", require("./src/routes/user.routes"));
app.use("/products", require("./src/routes/product.routes"));

module.exports = app;