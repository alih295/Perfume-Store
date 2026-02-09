const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    publicOrderId: {
  type: String,
  unique: true,
  required: true,
},

    orderStatus: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "accepted", "failed"],
      default: "pending",
    },
    customerName: {
      type: String,
      required: true,
    },
    addressId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },

    items: [
      {
        productId: mongoose.Schema.Types.ObjectId, // agar DB product hai
        title: String,
        imgSrc: String,
        price: Number,
        qty: Number,
      },
    ],

    subTotal: Number,
    shipping: Number,
    total: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
