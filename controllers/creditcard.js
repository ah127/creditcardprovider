exports.getCreditCards = (req,res,next) => {
    res.json({
        personName: "Kumar Yogi",
        cardNumber: "411111111111",
        expiryDate: "2025-01-30",
        cvcNumber: "422"
    });
}