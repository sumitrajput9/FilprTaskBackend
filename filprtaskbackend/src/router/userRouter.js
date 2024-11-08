const express = require('express');
const router = express.Router();
const { addUser, getUsers, updateByUserId } = require('../controller/userController');

router.post('/add', addUser);

router.get('/users', getUsers);
router.put('/update/:userId', updateByUserId);
module.exports = router;
