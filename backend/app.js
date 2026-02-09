const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const productRoutes = require('./Routes/ProductRoutes')
const AddressRoutes = require('./Routes/AddressPaymentRoutes')
const OrderRoutes = require('./Routes/OrderRoutes')
const AdminLoginRoutes = require('./Routes/AdminLoginRoute')
const UserRoutes = require('./Routes/userRoutes') 
const cookieParser = require('cookie-parser')
app.use("/uploads", express.static("uploads"));
app.use("/Payment", express.static("Payment"));
app.use(express.json())
app.use(cookieParser())

dotenv.config()
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.urlencoded({extended:true}))
const ConnectDb = require('./db/db')
const cartRouter = require('./Routes/cartRouter')
ConnectDb()
app.use('/api' , AdminLoginRoutes)
app.use('/api' , productRoutes)
// user routes
app.use('/api' , UserRoutes )


app.use('/api' , AddressRoutes)
app.use('/api' , OrderRoutes)

// cartroute

app.use('/api/user/cart' ,cartRouter)

module.exports = app