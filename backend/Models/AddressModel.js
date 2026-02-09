const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
 fullname:String,
 country:String,
 streetAddres:String,
 city:String,
 phone:Number,
 emailAddress:String
} ,
{timestamps:true}

);

module.exports = mongoose.model("Address", AddressSchema);
