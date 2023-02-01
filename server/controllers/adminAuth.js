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
    let transporter = await nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port:465,
      secure: true,
      auth: {
        user: 'vyanjan.demo.mailer@gmail.com',
        pass: 'geqbxfgsevsuollg',
      }
    })
    const mailMessage = {
      from: 'vyanjan.demo.mailer@gmail.com',
      to: foundAdmin.email,
      subject: 'Vyanjan Admin OTP Verification',
      html: `Your OTP for Admin verification is <strong>${gotp}</strong>.`
    }
    await transporter.sendMail(mailMessage)
      .then(async ()=>{
        await otpGenerate.save()
        return res.status(200).send("Main sent")
      })
      .catch((err)=>{
        console.log(err);
        return res.status(500).send("Mail not sent")
      })
  } catch (error) {
    return res.status(404).json({ error: error })
  }
}

const otpVerification = async (req, res) => {
  const {email} = req.params;
  const {otp} = req.body;
  const foundOtp = await otpData.find({ email })
  if (foundOtp === null) {
    return res.status(500).send('Unauthorized Access')
  }
  const verify = await bcrypt.compare(otp, foundOtp[foundOtp.length - 1].otp)
  if (!verify) {
    return res.status(500).send('Wrong Credentials')
  }
  await otpData.deleteMany({ email })
  return res.status(200).send('Otp verification successful')
}

module.exports = {
  passwordVerification,
  otpVerification,
}