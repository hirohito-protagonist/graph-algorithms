const Lab = require('lab');
const lab = exports.lab = Lab.script();

const beforeEach = lab.beforeEach;
const describe = lab.describe;
const it = lab.it;
const expect = Lab.expect;

const TopologicalSort = require('./../lib/topological-sort');
const AdjacencyMatrixGraph = require('./../lib/adjacency-matrix-graph');

describe('Topological sort', () => {
    
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

    describe('Directed acyclic graph', () => {

        it('should return sorted relationships between vertices', (done) => {

            expect(TopologicalSort(graph)).to.equal([0, 1, 2, 5, 3, 7, 4, 6, 8]);
            done();
        });
    });

    describe('Directed cyclic graph', () => {

        beforeEach((done) => {
    
            /*
             * 0------>1----->5------->6---------->8 
             * ^        \               \
             * +---------2-------------->3
             *            \---------------\----->4
             *             \--->7
             */
            graph.addEdge(2, 0);
            done();
        });

        it('should throw exception', (done) => {

            try {
                TopologicalSort(graph);
            } catch(e) {
                expect(e.message).to.equal('This graph has a cycle!');
                done();
            }
        });
    });
});
