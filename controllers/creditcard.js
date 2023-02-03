const Card = require('../models/card');
const valid = require('card-validator');
const cardValidator = require('../utils/helper');
const card = require('../models/card');

exports.getCreditCards = (req, res, next) => {
    Card.find()
        .then(cards => {
            // console.log(cards);
            res.status(200).json(cards);
        })
}

exports.createCreditCards = (req, res, next) => {
    const cardNumber = req.body.cardNumber;
    const personName = req.body.fullName;
    const expiryDate = req.body.expiryDate;
    const cvcNumber = req.body.cvcNumber;
    const balance = req.body.balance;
    const limit = req.body.limit;

    if(cardValidator.isNumber(cardNumber) && cardValidator.isNumber(cvcNumber) && cardValidator.isNumber(balance ) && cardValidator.isNumber(limit)){
        const numberValidation = valid.number(cardNumber);
        console.log(numberValidation);
        if(numberValidation.isValid) {
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
            'message' : 'The credit card you have entered is invalid'
        })
    }
    } else {
        res.status(400).json({
            "type":"error",
            "message":"One of the value provided is not a number"
        })
    }
}

