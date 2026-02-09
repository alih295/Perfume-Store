const express = require("express");
const addToCart = require("../Controller/cartController");
const cartRouter = express.Router();
const UserAuth = require('../Middlewares/UserAuth')

cartRouter.post("/add", UserAuth, addToCart);

module.exports = cartRouter;
