const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
  otp: {
    type:Number,
    required:true,
  },
  email: {
    type:String,
    required:true
  }
})

const otpData = new mongoose.model('otpData', otpSchema)

module.exports=otpData