const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' } , 
    paymentMethod: {
      type: String,
      enum: ["jazzcash", "easypaisa", "bank"],
      required: true,
    },

    transactionId: {
      type: String,
    },

    senderNumber: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["under-review", "verified", "rejected"],
      default: "under-review",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Payment", PaymentSchema);
