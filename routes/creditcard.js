const express = require('express');
const { body, check } = require('express-validator');

const router = express.Router();

const creditCardController = require('../controllers/creditcard');

router.get('/cards', creditCardController.getCreditCards);

router.post('/cards', [
    check('cardNumber')
        .isNumeric()
        .isLength({ max: 19 }),
    body('cvcNumber')
        .isNumeric(),
    body('balance')
        .isNumeric(),
    body('limit')
        .isNumeric()
], creditCardController.createCreditCards);

module.exports = router;