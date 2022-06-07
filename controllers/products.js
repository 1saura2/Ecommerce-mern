const async = require("hbs/lib/async");
const Product = require("../models/Products")

const returnProducts = async (req, res) => {
    let products = await Product.find();
    let { limit } = req.query
    let newProducts = products.map((product) => {
        let { id, title, price, category, image } = product
        return { id, title, price, category, image }
    })
    if (limit) {
        newProducts = newProducts.slice(0, Number(limit))
    }
    res.json(newProducts)
}

const returnSingleProduct = async (req, res) => {
    let { productID } = req.params
    const selectedProduct = await Product.findById(productID)
    res.json(selectedProduct)
}

const createProduct = async (req, res) => {
    let result = await Product.create({
        title:req.body.title,
        price:req.body.price,
        category:req.body.category,
        image:req.body.image,
   
});
res.send(result)
}
const updateproduct=(req,res)=>{
const {productID}=req.params;
product.findByIdAndUpdate(productID,req.body)
req.json(result)
}
const deleteProduct=(req,res)=>{
    const {productID}=req.params;
    product.findByIdAndUpdate(productID)
    req.json(result)
    }


module.exports = { returnProducts, returnSingleProduct, createProduct,updateproduct,deleteProduct}
