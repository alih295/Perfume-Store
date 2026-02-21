const express = require('express')
const { getOrder, getOrderById, deleteOrderById, updateOrderById , placeOrder } = require('../Controller/OrderController')
const adminAuth = require('../Middlewares/AdminMiddalware')
const UserAuth = require('../Middlewares/UserAuth')
const router = express.Router()

router.get('/order' , UserAuth ,   getOrder)
router.get('/order/:id' , UserAuth ,  getOrderById)
router.delete('/deleteorder/:id' , adminAuth , deleteOrderById)
router.post('/update-order/:id' , adminAuth , updateOrderById)

router.post('/place-order' , UserAuth , placeOrder)



module.exports =router