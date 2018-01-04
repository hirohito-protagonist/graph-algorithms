const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Lab.expect;

const Utils = require('./../lib/utils');

describe('Utils', () => {
        

    describe('matrix', () => {

        [
            {
                dimension: -1,
                output: []
            },
            {
                dimension: 0,
                output: []
            },
            {
                dimension: 1,
                output: [[0]]
            },
            {
                dimension: 2,
                output: [
                    [0, 0],
                    [0, 0]
                ]
            },
            {
                dimension: 4,
                output: [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]                    
                ]
            }
        ].forEach((testData) => {

            it(`should create ${testData.dimension}x${testData.dimension} matrix`, (done) => {

                expect(Utils.matrix(testData.dimension)).to.equal(testData.output);
                done();
            });
        });

        it('should fill items with provided value', (done) => {

            expect(Utils.matrix(2, 1)).to.equal([
                [1, 1],
                [1, 1]
            ]);
            done();
        });
    });
});
