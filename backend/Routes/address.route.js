const express = require("express");
const { Address } = require("../Controller/address.controller");
const UserAuth = require('../Middlewares/UserAuth')

const router = express.Router();
router.post('/add-address' , UserAuth ,   Address)


module.exports = router