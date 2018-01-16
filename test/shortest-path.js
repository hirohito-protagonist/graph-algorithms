const Lab = require('lab');
const lab = exports.lab = Lab.script();

const beforeEach = lab.beforeEach;
const describe = lab.describe;
const it = lab.it;
const expect = Lab.expect;

const ShortestPath = require('./../lib/shortest-path');
const AdjacencyMatrixGraph = require('./../lib/adjacency-matrix-graph');

describe('Shortest path', () => {
        
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

    it('should find', (done) => {

        expect(ShortestPath(graph, 0, 3)).to.equal([0, 1, 2, 3]);
        done();
    });

    it('should throw exception when path could not be find', (done) => {

        try {
            ShortestPath(graph, 7, 6);
        } catch(e) {
            expect(e.message).to.equal('There is no path from 7 to 6');
            done();
        }
    });
});
