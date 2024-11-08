const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// Admin registration route
router.post('/register', adminController.registerAdmin);

// Admin login route
router.post('/login', adminController.loginAdmin);

module.exports = router;
