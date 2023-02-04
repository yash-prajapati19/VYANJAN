const express = require('express')


const {
    orderPlaced,
    getAllResturantOrder,
    getAllUserOrder,
    getOneOrder,
    updateOrder,
    addInfo,
    cancelOrder,
  } = require("../controllers/order");
  
  const router = express.Router()


// order routes

router.route('/place').post(orderPlaced)
router.route('/:id').get(getOneOrder)
router.route('/:id').put(updateOrder)
router.route('/addinfo/:id').put(addInfo)
router.route('/cancel/:id').put(cancelOrder)
router.route('/resturant/:id').get(getAllResturantOrder)
router.route('/user/:id').get(getAllUserOrder)



module.exports=router