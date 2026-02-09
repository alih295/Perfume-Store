const express = require('express')
const adminLogin = require('../Controller/AdminLoginController')
const router = express.Router()
const env = require('dotenv')
const adminAuth = require('../Middlewares/AdminMiddalware')
env.config()

router.post('/admin/login'  , adminLogin)




module.exports = router