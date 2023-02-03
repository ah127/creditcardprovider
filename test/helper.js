const expect = require('chai').expect;

const cardValidator = require('../utils/helper');

describe('Card Validation - Create Card', () => {
    it('should be true if the provide data is of type Number', function() {
        expect(cardValidator.isNumber(1234)).to.equal(true);
    })
})
