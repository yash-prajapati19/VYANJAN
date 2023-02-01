const express = require('express')

const {
  passwordVerification,
  otpVerification,
} = require('../controllers/adminAuth');

const {
  createResturant,
  getOneResturant,
  getAllResturant,

} = require('../controllers/resturant');

const {
  createItem,
  getAllResturantItem,
  getOneItem,
  updateItem,
  deleteItem,
} = require("../controllers/item");

const {
  orderPlaced,
  getAllResturantOrder,
  getAllUserOrder,
  getOneOrder,
  updateOrder,
  cancelOrder,
} = require("../controllers/order");


const router = express.Router()

router.route('/adminlogin').post(passwordVerification)
router.route('/otp/:email').post(otpVerification)

// resturant routes

router.route('/resturant/:id').get(getOneResturant)
router.route('/resturant').get(getAllResturant)

// item routes

router.route('/item/create').post(createItem)
router.route('/item/:id').get(getOneItem)
router.route('/item/:id').put(updateItem)
router.route('/item/:id').delete(deleteItem)
router.route('/item/resturant/:id').get(getAllResturantItem)

// order routes

router.route('/order/place').post(orderPlaced)
router.route('/order/:id').get(getOneOrder)
router.route('/order/:id').put(updateOrder)
router.route('/order/:id').put(cancelOrder)
router.route('/order/resturant/:id').get(getAllResturantOrder)
router.route('/order/user/:id').get(getAllUserOrder)



module.exports=router