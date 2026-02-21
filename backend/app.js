const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
const ConnectDb = require("./db/db");
ConnectDb();

const productRoutes = require("./Routes/ProductRoutes");
const OrderRoutes = require("./Routes/OrderRoutes");
const AdminLoginRoutes = require("./Routes/AdminLoginRoute");
const UserRoutes = require("./Routes/userRoutes");
const paymentRoutes = require('./Routes/payment.route')



const cartRouter = require("./Routes/cartRouter");
const addressroutes = require('./Routes/address.route')
// app.use("/uploads", express.static("uploads"));
// app.use("/Payment", express.static("Payment"));

app.use("/api", AdminLoginRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRouter);
// user routes
app.use("/api", UserRoutes);

app.use("/api" , addressroutes);
app.use("/api/order", OrderRoutes);
app.use('/api/payment' , paymentRoutes)


module.exports = app;
