const express = require('express')
const { getOrder, getOrderById, deleteOrderById, updateOrderById, trackOrderById, getMonthlySales } = require('../Controller/OrderController')
const adminAuth = require('../Middlewares/AdminMiddalware')
const router = express.Router()

router.get('/order' ,  getOrder)
router.get('/order/:id' ,  getOrderById)
router.delete('/deleteorder/:id' , adminAuth , deleteOrderById)
router.post('/update-order/:id' , adminAuth , updateOrderById)

// routes/orderRoutes.js
router.get("/track-order/:orderId" ,  trackOrderById)
router.get("/monthly-sales",adminAuth, getMonthlySales);


module.exports =router