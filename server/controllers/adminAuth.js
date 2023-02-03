const otpData = require('../models/otpSchema')
const AdminData = require('../models/adminSchema')
const jwt = require('jsonwebtoken')
const resturantData = require('../models/resturant')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const user = require('../models/user')
const itemsData = require('../models/item')

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
  try {
    const {email} = req.params;
    const {otp} = req.body;
    const foundOtp = await otpData.find({ email })
    const foundAdmin = await AdminData.findOne({ email })
    const foundResturant = await resturantData.findOne({ admin_id: foundAdmin._id })
    const resturantItems = await itemsData.find({ creator : foundResturant._id })

    if (foundAdmin === null) {
      return res.status(500).send('Unauthorized Access')
    }
    if (foundOtp === null) {
      return res.status(500).send('Unauthorized Access')
    }
    const verify = await bcrypt.compare(otp, foundOtp[foundOtp.length - 1].otp)
    if (!verify) {
      return res.status(500).send('Wrong Credentials')
    }
    await otpData.deleteMany({ email })
  
    // jwt code here ----------------------------------------------- YASH HERE
   
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 86400 // expires in 24 hours
    });
  
    res.cookie('token', token, {
      httpOnly: true
    });
  
    return res.status(200).send( {auth: true, resturantItems, foundAdmin, foundResturant})
  }
  catch (error) {
    return res.status(404).json({ error: error })
  }
}


// register admin with resturant

// -----------------------------jwt token is remaining---------------------------

const registerAdmin_Resturant = async (req, res) => {
  try {
    const {
      resturantName,
      resturantTags,
      imageUrl,
      resturantAddress: {
        street,
        aptName,
        locality,
        zip,
        lat,
        lng,
        phoneNo
      },
      // resturantItems,
      admin_id,
      items,
      email,
      password,
    } = req.body;

    const formattedAdd = `${street}, ${aptName}, ${locality}, ${zip}, ${lat}, ${lng}, ${phoneNo}`;

    const resturant = new resturantData({
      name:resturantName,
      tags:resturantTags,
      imageUrl,
      address: {
        street,
        aptName,
        locality,
        zip,
        lat,
        lng,
        phoneNo
      },
      formattedAddress:formattedAdd,
      //items: resturantItems,
      admin_id,
      items,
      email,
    });

    const newAdmin = new AdminData({
      email,
      password,
      resturantId: resturant._id
    })

    const savedResturant = await resturant.save();
    const savedAdmin = await newAdmin.save();

    return res.status(200).json({
      resturant: savedResturant,
      admin: savedAdmin
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

module.exports = {
  passwordVerification,
  otpVerification,
  registerAdmin_Resturant
}