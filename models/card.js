const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    personName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: Number,
        required: true
    },
    cvcNumber: {
        type: Number,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    limit: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Card', cardSchema);