const express = require('express');
const { getSubscribedEmails, addSubscribeEmail } = require('../controller/subscribedController');
const router = express.Router();

router.post('/add',addSubscribeEmail);
router.get('/', getSubscribedEmails);

module.exports = router;
