const Product = require('../models/product.model');
const productsRoutes = require('../routes/products.routes');

module.exports.findAllProducts = (req, res)=> {
    console.log("Getting all the products here")
    //mongoose command to retrieve all jokes from the joke table/collection
    Product.find()
    .then(allProduct => res.json({results:allProduct}))
    .catch(err => res.json({error:err}))
}

module.exports.createProduct =(req,res)=> {
    console.log("Creating the Product")
    Product.create(req.body)
        .then(newProduct => res.json({results:newProduct}))
        .catch(err => res.json({error:err}))
}