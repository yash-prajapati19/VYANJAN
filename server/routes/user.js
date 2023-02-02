const express = require('express');
const {
    registerUser,
} = require('../controllers/userAuth');

const router = express.Router();

router.route('/register').post(registerUser);

module.exports = router;