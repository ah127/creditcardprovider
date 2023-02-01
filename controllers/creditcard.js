exports.getCreditCards = (req, res, next) => {
    res.status(200).json({
        cards: [{personName: "Kumar Yogi",cardNumber: "411111111111",expiryDate: "2025-01-30",cvcNumber: "422"}]
    });
}

exports.createCreditCards = (req, res, next) => {
    const cardNumber = req.body.cardNumber;
    const personName = req.body.fullName;
    const expiryDate = req.body.expiryDate;
    const cvcNumber = req.body.cvcNumber;

    //create cards in database
    res.status(201).json({
        message: 'Card created successfully!',
        card: {id: new Date().toISOString(), personName: personName, cardNumber: cardNumber, expiryDate:expiryDate, cvc: cvcNumber}
    })
}

