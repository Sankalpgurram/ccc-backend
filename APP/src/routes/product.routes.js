const express = require("express");
const router = express.Router();
const productHandler = require("../handlers/product.handler");

router.post("/", productHandler.createProduct);
router.get("/", productHandler.getProducts);

module.exports = router;