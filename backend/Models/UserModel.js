const mongoose = require('mongoose')


const userSchema = mongoose.Schema(
   {
      fullname:{
         type:String,
         required:true
      },
      email:{
         type:String,
         required:true,
         unique:true,
         select:false
      } ,
      password:{
         type:String,
         required:true,
         select:false
      },
   }
   ,
)

const userModel = mongoose.model('user' , userSchema )

module.exports = userModel