const express = require("express");
const userRoute = require("./src/routes/user.routes");
const productRoute = require("./src/routes/product.routes");
const orderRoute = require("./src/routes/order.routes");

const app = express();

app.use(express.json());

app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/orders", orderRoute);

module.exports = app;