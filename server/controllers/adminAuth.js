const otpData = require('../models/otpSchema')
const AdminData = require('../models/adminSchema')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

const passwordVerification = async (req, res) => {
  try {

    const { email } = req.body
    const { password } = req.body
    const foundAdmin = await AdminData.findOne({ email })
    if (foundAdmin === null) {
      return res.status(500).send('Wrong Credentials')
    }
    const verify = await bcrypt.compare(password, foundAdmin.password)
    if (!verify) {
      return res.status(500).send('Wrong Credentials')
    }
    let gotp = Math.floor(Math.random() * (9999 - 1000)) + 1000
    const otpGenerate = new otpData({
      otp: gotp,
      email: foundAdmin.email
    })
    await otpGenerate.save()
    let transporter = await nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: 'user_vyanjan@outlook.com',
        pass: 'demo_account@mail-services',
      }
    })
    const mailMessage = {
      from: 'user_vyanjan@outlook.com',
      to: foundAdmin.email,
      subject: 'Vyanjan Admin OTP Verification',
      html: `Your OTP for Admin verification is <strong>${gotp}</strong>.`
    }
    transporter.sendMail(mailMessage, function(err, info){
      if(err){
        console.log(err);
        return res.status(404).send(err)
      }
      return res.status(200).send('Mail Sent')
    })
  } catch (error) {
    return res.status(404).json({ error: error })
  }
}

const otpVerification = async (req, res) => {

}


module.exports = {
  passwordVerification,
  otpVerification,
}