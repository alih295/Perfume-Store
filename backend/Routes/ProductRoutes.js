const express = require("express");
const {getProduct, deleteProduct , addProduct , updateProduct} = require("../Controller/productController")

const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();
const adminAuth = require("../Middlewares/AdminMiddalware");
const UserAuth = require("../Middlewares/UserAuth");

router.get("/product", getProduct);
router.delete("/delete", adminAuth, deleteProduct);
router.patch('/update-product/:id' , updateProduct)
router.post("/add-product", adminAuth, upload.single("image"), addProduct);

module.exports = router;
