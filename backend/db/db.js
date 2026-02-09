const mongoose = require('mongoose')
require("dotenv").config(); 
const ConnectDb = async ()=>{
   try {
    await  mongoose.connect(process.env.MONGO_URL)
      console.log('mongo db connected successfully')
   } catch (error) {
      console.log(error.message)
   }
}

module.exports = ConnectDb
