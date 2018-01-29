const { expect } = require('code');
const Lab = require('lab');
const { beforeEach, describe, it } = exports.lab = Lab.script();

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

            it(`should create ${testData.dimension}x${testData.dimension} matrix`, () => {

                expect(Utils.matrix(testData.dimension)).to.equal(testData.output);
            });
        });

        it('should fill items with provided value', () => {

            expect(Utils.matrix(2, 1)).to.equal([
                [1, 1],
                [1, 1]
            ]);
        });
    });

    describe('distanceTable', () => {
        
        let graph;

        beforeEach(() => {
    
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
        });

        it('should build distance table', () => {

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
                '0': [null, null],
                '1': [null, null],
                '2': [null, null],
                '3': [0, 3],
                '4': [4, 3],
                '5': [null, null],
                '6': [4, 3],
                '7': [null, null],
                '8': [7, 6]
            });
        });
    });

    describe('priorityDistanceTable', () => {
        
        let graph;

        beforeEach(() => {
    
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
        });

        it('should build distance table', () => {

            expect(Utils.priorityDistanceTable(graph, 0)).to.equal({
                '0': [0, 0],
                '1': [1, 0],
                '2': [2, 1],
                '3': [3, 2],
                '4': [3, 2],
                '5': [2, 1],
                '6': [3, 5],
                '7': [3, 2],
                '8': [4, 6]
            });

            expect(Utils.priorityDistanceTable(graph, 3)).to.equal({
                '0': [null, null],
                '1': [null, null],
                '2': [null, null],
                '3': [0, 3],
                '4': [1, 3],
                '5': [null, null],
                '6': [1, 3],
                '7': [null, null],
                '8': [2, 6]
            });
        });
    });
});
