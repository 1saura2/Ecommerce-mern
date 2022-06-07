const express = require('express')
const router = express.Router();
const { returnProducts, returnSingleProduct, createProduct, updateproduct, deleteProduct } = require('../controllers/products')

router.get("/", returnProducts)
router.get("/:productID", returnSingleProduct)

router.post("/", createProduct);
router.patch("/productID",updateproduct);
 router.delete("/productID",deleteProduct)


module.exports = router