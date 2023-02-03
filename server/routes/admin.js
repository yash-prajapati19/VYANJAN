const express = require('express')

const {
  passwordVerification,
  otpVerification,
} = require('../controllers/adminAuth');

const router = express.Router()

router.route('/adminlogin').post(passwordVerification)
router.route('/otp/:email').post(otpVerification)

module.exports=router