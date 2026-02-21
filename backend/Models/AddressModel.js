const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    fullname:{
      type:String,
      required:true
    } , 
    country: {
      type:String,
      required:true
    },
    streetAddress:{
      type:String,
      required:true
    },
    city: {
      type:String,
      required:true
    },
    phone:{
      type:String,
      required:true
    },
    email: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Address", AddressSchema);
