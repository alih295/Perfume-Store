const express = require("express");
const { placeOrder, verifyPayment, getOrderById, getPayment, deletePaymentById, UpdatePaymentStatus } = require("../Controller/AddressPaymentController");
const paymentupload = require('../config/paymentMulter');
const adminAuth = require("../Middlewares/AdminMiddalware");

const router = express.Router();
router.post('/place-order' ,  placeOrder)
router.post('/payment-verification' , paymentupload.single('screenshot')   ,  verifyPayment)
router.get('/payment' , adminAuth , getPayment)
router.get('/order/:orderId' , getOrderById)
router.delete('/deletepaymentbyId/:id' , adminAuth , deletePaymentById),
router.post('/updatePaymentStatus/:id' , adminAuth , UpdatePaymentStatus)

module.exports = router