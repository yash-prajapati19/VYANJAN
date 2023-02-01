const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const otpSchema = new mongoose.Schema({
  otp: {
    type:String,
    required:true,
  },
  email: {
    type:String,
    required:true
  },
  createdAt:{
    type: Date,
    expires: "1",
    default: Date.now
  }
})

otpSchema.pre('save', async function(){
  await bcrypt.hash(this.otp, 10)
    .then((data) => {
      this.otp = data
    })
    .catch((err)=> {
      console.log(err);
    })
    return
})

const otpData = new mongoose.model('otpData', otpSchema)

module.exports=otpData