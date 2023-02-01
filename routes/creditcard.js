const express = require('express');
const router = express.Router();

const creditCardController = require('../controllers/creditcard');

router.get('/cards', creditCardController.getCreditCards);

module.exports = router;