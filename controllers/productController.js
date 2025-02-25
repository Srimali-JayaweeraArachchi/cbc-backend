import Product from "../models/product.js";


export function getProducts(req, res) {
    Product.find()
        .then((productList) => {
            res.json({
                list: productList
            })
        })
        .catch((err) => {
            res.json({
                message: "Error getting products"
            })
        })        
}   

export function createProduct(req, res) {

    console.log(req.user);

    if(req.user == null){
        res.json({
            message: "User not logged in"
        })
        return
    }

    if(req.user.type != "admin"){
        res.json({
            message: "User is not admin"
        })
        return
    }

    const product = new Product(req.body);
    product.save()
        .then(() => {
            res.json({
                message: "Product created"
            });
        })
        .catch(() => {
            res.json({
                message: "Error creating product"
            });
        });
}

export function deleteProduct(req, res) {
    Product.deleteOne({name: req.params.name})
        .then(() => {
            res.json({
                message: "Product deleted"
            });
        })
        .catch(() => {
            res.json({
                message: "Error deleting product"
            });
        });
}
export function getProductByName(req, res) {
    const name = req.params.name;

    Product.find({name: name}).then
        ((productList) => {
            res.json({
                list: productList
            })
        })
        .catch(() => {
            res.json({
                message: "Error getting products"
            })
        })
}
