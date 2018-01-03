const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Lab.expect;

const IndexTest = require('./../lib');

describe('Index test', () => {
        
    it('test', (done) => {

        expect(IndexTest()).to.equal(void(0));
        done();
    });


});
