const express = require('express')


const {
    getOneResturant,
    getAllResturant,
  
  } = require('../controllers/resturant');

const router = express.Router()

// resturant routes

router.get('/:id', getOneResturant)
router.get('/', getAllResturant)

module.exports=router
