const ProductsController = require("../controllers/products.controllers");

module.exports = app => {
    app.get("/api/product", ProductsController.findAllProducts);
    app.post("/api/products/create", ProductsController.createProduct);
}