const { getProduct, addProduct, deleteProduct, updateProduct, addToCart } = require("../Controller/productController");
const ProductModel = require("../Models/ProductModel");
const express = require("express");
const router = express.Router();
const upload = require('../config/multer');
const adminAuth = require("../Middlewares/AdminMiddalware");
const UserAuth = require("../Middlewares/UserAuth");


router.get("/product",   getProduct);
router.delete('/delete' , adminAuth ,  deleteProduct)
router.post('/addproduct' , upload.single('image') , adminAuth ,   addProduct )
router.put('/updateproduct/:id' ,upload.single('image'), adminAuth ,  updateProduct)
router.post('/addtoCart' , UserAuth , addToCart)

module.exports = router;
