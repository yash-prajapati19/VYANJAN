const express = require('express')


const {
    getOneResturant,
    getAllResturant,
    updateResturant,
  } = require('../controllers/resturant');

const router = express.Router()

// resturant routes

router.get('/:id', getOneResturant)
router.get('/', getAllResturant)
router.put('/edit/:id', updateResturant)

module.exports=router
