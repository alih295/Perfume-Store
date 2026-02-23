const express = require("express");
const cors = require("cors");
const dns = require('dns')
dns.setServers(['1.1.1.1' , '8.8.8.8'])
const app = express();
require('dotenv').config()
const cookieParser = require("cookie-parser");
const conectDb =require('./db/db')
conectDb()
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));


const productRoutes = require("./Routes/ProductRoutes");
const OrderRoutes = require("./Routes/OrderRoutes");
const AdminLoginRoutes = require("./Routes/AdminLoginRoute");
const UserRoutes = require("./Routes/userRoutes");
const paymentRoutes = require('./Routes/payment.route')



const cartRouter = require("./Routes/cartRouter");
const addressroutes = require('./Routes/address.route');
const ConnectDb = require("./db/db");

app.use("/api", AdminLoginRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRouter);
// user routes
app.use("/api", UserRoutes);

app.use("/api" , addressroutes);
app.use("/api/order", OrderRoutes);
app.use('/api/payment' , paymentRoutes)


module.exports = app;
