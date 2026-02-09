const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
   title:{
      type:String,
      required:true
   },
   description:{
      type:String,
   },
   imgSrc:{
      type:String,
      required:true
   },
   price:{
      type:Number,
      required:true
   },
   qty:{
      type:Number,
      default:1,
      required:true
   }
})

const ProductModel = mongoose.model('product' , productSchema)

module.exports = ProductModel