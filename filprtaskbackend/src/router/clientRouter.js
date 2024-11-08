const express = require('express');
const router = express.Router();
const { addClient, getClients } = require('../controller/clientController');

router.post('/add', addClient);
router.get('/', getClients);
module.exports = router;
