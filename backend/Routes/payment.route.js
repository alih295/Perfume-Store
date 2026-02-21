const express = require('express')
const multer = require('multer')
const {addPayment} = require('../Controller/payment.controller')
const UserAuth = require('../Middlewares/UserAuth')
const router = express.Router()


const upload = multer({storage:multer.memoryStorage()})

router.post('/add-payment' ,  UserAuth , upload.single('image') , addPayment)


module.exports = router