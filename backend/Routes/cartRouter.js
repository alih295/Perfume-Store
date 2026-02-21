const express = require("express");
const {addToCart, getcartitems} = require("../Controller/cartController");
const router = express.Router();
const UserAuth = require('../Middlewares/UserAuth')

router.post("/addto-cart", UserAuth, addToCart);
router.get('/getcartitems' ,UserAuth , getcartitems )

module.exports = router;
