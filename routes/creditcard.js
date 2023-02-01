const express = require('express');
const router = express.Router();

const creditCardController = require('../controllers/creditcard');

router.get('/cards', creditCardController.getCreditCards);

router.post('/cards', creditCardController.createCreditCards);

module.exports = router;