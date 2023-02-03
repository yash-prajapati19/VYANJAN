const express = require('express')


const {
    createItem,
    getAllResturantItem,
    getOneItem,
    updateItem,
    deleteItem,
  } = require("../controllers/item");

const router = express.Router()

// item routes

router.route('/create').post(createItem)
router.route('/:id').get(getOneItem)
router.route('/:id').put(updateItem)
router.route('/:id').delete(deleteItem)
router.route('/resturant/:id').get(getAllResturantItem)

module.exports=router
