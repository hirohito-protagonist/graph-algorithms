const { expect } = require('code');
const Lab = require('lab');
const { describe, it } = exports.lab = Lab.script();

const IndexTest = require('./../lib');

describe('Index test', () => {
        
    it('test', () => {

        expect(IndexTest()).to.equal(void(0));
    });


});
