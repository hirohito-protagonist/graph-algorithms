const Lab = require('lab');
const lab = exports.lab = Lab.script();

const beforeEach = lab.beforeEach;
const describe = lab.describe;
const it = lab.it;
const expect = Lab.expect;

const Traversal = require('./../lib/traversal');
const AdjacencyMatrixGraph = require('./../lib/adjacency-matrix-graph');

describe('Traversal', () => {
        
    let graph;

    beforeEach((done) => {

        /*
         * 0_______1_______5________6_________8 
         *         \                \
         *          2________________3
         *          \________________\__4
         *          \___7
         */
        graph = new AdjacencyMatrixGraph(9);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 7);
        graph.addEdge(2, 4);
        graph.addEdge(2, 3);
        graph.addEdge(1, 5);
        graph.addEdge(5, 6);
        graph.addEdge(6, 3);
        graph.addEdge(6, 8);
        done();
    });

    describe('breadthFirst', () => {

        it('should visit graph in correct order', (done) => {

            const vertices = [];

            Traversal.breadthFirst(graph, 2, (vertex) => vertices.push(vertex));

            expect(vertices).to.equal([2, 1, 3, 4, 7, 0, 5, 6, 8]);
            done();
        });
    });

    describe('depthFirst', () => {

        it('should visit graph in correct order', (done) => {

            const vertices = [];

            Traversal.depthFirst(graph, (vertex) => vertices.push(vertex));

            expect(vertices).to.equal([0, 1, 2, 3, 6, 5, 8, 4, 7]);
            done();
        });
    });
});
