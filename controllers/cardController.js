const Card = require('../models/card');
const valid = require('card-validator');
const { validationResult } = require('express-validator');
const cardValidator = require('../utils/cardValidator');
const card = require('../models/card');

//@desc - get list of creditcards
//@route -GET /cards
//@access - public

exports.getCreditCards = (req, res, next) => {
    Card.find()
        .then(cards => {
            res.status(200).json(cards);
        })
}

//@desc - create a credit Card
//@route -POST /cards
//@access - public

exports.createCreditCards = (req, res, next) => {
    const cardNumber = req.body.cardNumber;
    const personName = req.body.fullName;
    const expiryDate = req.body.expiryDate;
    const cvcNumber = req.body.cvcNumber;
    const balance = req.body.balance;
    const limit = req.body.limit;
    
    // Finds the validation errors in this request and wraps them in an object with handy functions

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        if(cardValidator.checkCardValidity(cardNumber)) {
            const card = new Card({
                personName : personName,
                cardNumber : cardNumber,
                expiryDate : expiryDate,
                cvcNumber: cvcNumber,
                balance: balance,
                limit: limit
            })
            //create cards in database
        card
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Card created successfully!',
                cardDetails: card
            })

             })
        } else {
            res.status(400).json({
            "type":"error",
            'message' : 'The credit card you have entered is invalid'})
        }
      }
}

