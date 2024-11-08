const express = require('express');
const router = express.Router();
const { addClient } = require('../controller/clientController');

router.post('/add', addClient);
module.exports = router;
