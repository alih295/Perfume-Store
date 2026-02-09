const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["jazzcash", "easypaisa", "bank"],
      required: true,
    },

    transactionId: {
      type: String,
      required: true,
    },

    senderNumber: {
      type: String,
      required: true,
    },

    screenshot: {
      type: String,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
