const express = require('express')

const {
  passwordVerification,
  otpVerification,
  registerAdmin_Resturant,
} = require('../controllers/adminAuth');

const router = express.Router()

router.route('/addresturant').post(registerAdmin_Resturant)
router.route('/adminlogin').post(passwordVerification)
router.route('/otp/:email').post(otpVerification)

module.exports=router