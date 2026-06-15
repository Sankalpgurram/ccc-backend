const products = [];

const createProduct = (product) => {
    products.push(product);
    return product;
};

const getProducts = () => {
    return products;
};

module.exports = {
    createProduct,
    getProducts
};