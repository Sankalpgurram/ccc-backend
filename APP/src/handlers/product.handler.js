const productService = require("../services/product.service");

const createProduct = (req, res) => {
    const product = productService.createProduct(req.body);
    res.status(201).json(product);
};

const getProducts = (req, res) => {
    res.json(productService.getProducts());
};

module.exports = {
    createProduct,
    getProducts
};