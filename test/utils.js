const Lab = require('lab');
const lab = exports.lab = Lab.script();

const beforeEach = lab.beforeEach;
const describe = lab.describe;
const it = lab.it;
const expect = Lab.expect;

const Utils = require('./../lib/utils');
const AdjacencyMatrixGraph = require('./../lib/adjacency-matrix-graph');

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

    describe('distanceTable', () => {
        
        let graph;

        beforeEach((done) => {
    
            /*
             * 0------>1----->5------->6---------->8 
             *          \               \
             *           2-------------->3
             *            \---------------\----->4
             *             \--->7
             */
            graph = new AdjacencyMatrixGraph(9, true);
            graph.addEdge(0, 1);
            graph.addEdge(1, 2);
            graph.addEdge(2, 7);
            graph.addEdge(2, 4);
            graph.addEdge(2, 3);
            graph.addEdge(1, 5);
            graph.addEdge(5, 6);
            graph.addEdge(3, 6);
            graph.addEdge(3, 4);
            graph.addEdge(6, 8);
            done();
        });

        it('should build distance table', (done) => {

            expect(Utils.distanceTable(graph, 0)).to.equal({
                '0': [0, 0],
                '1': [1, 0],
                '2': [2, 1],
                '3': [3, 2],
                '4': [3, 2],
                '5': [2, 1],
                '6': [6, 5],
                '7': [3, 2],
                '8': [7, 6]
            });

            expect(Utils.distanceTable(graph, 3)).to.equal({
                '0': [undefined, undefined],
                '1': [undefined, undefined],
                '2': [undefined, undefined],
                '3': [0, 3],
                '4': [4, 3],
                '5': [undefined, undefined],
                '6': [4, 3],
                '7': [undefined, undefined],
                '8': [7, 6]
            });
            done();
        });
    });
});
