const mongoose = require('mongoose')

const AdminLoginSchema = mongoose.Schema({
   email:{
      type:String,
      required:true,
      unique:true
   },
   password:{
      type:String,
      required:true
   }
})

const AdminLoginModel = mongoose.model('AdminLogin' , AdminLoginSchema)
module.exports = AdminLoginModel