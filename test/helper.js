const expect = require('chai').expect;

const cardValidator = require('../utils/helper');

describe('Card Validation - Create Card', () => {
    it('should be true if the provide data is of type Number', function() {
        expect(cardValidator.isNumber(1234)).to.equal(true);
    })

    it('should be true if the provided credit card number meet Luh10 algorith', function() {
        expect(cardValidator.checkCardValidity(4417123456789113)).to.equal(true);
    })

    it('should be false if the provided credit card number doesn not meet Luh10 algorith', function() {
        expect(cardValidator.checkCardValidity(4417123456789114)).to.equal(false);
    })
})
