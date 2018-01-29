const { expect } = require('code');
const Lab = require('lab');
const { beforeEach, describe, it } = exports.lab = Lab.script();

const Traversal = require('./../lib/traversal');
const AdjacencyMatrixGraph = require('./../lib/adjacency-matrix-graph');

describe('Traversal', () => {
        
    describe('Directed', () => {
        let graph;

        beforeEach(() => {
    
            /*
             * 0------>1----->5------->6---------->8 
             *          \               \
             *           2-------------->3
             *            \--------------------->4
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
            graph.addEdge(6, 3);
            graph.addEdge(6, 8);
        });
    
        describe('breadthFirst', () => {
    
            it('should visit graph in correct order', () => {
    
                const vertices = [];
    
                Traversal.breadthFirst(graph, 2, (vertex) => vertices.push(vertex));
    
                expect(vertices).to.equal([2, 3, 4, 7]);
            });
        });
    
        describe('depthFirst', () => {
    
            it('should visit graph in correct order', () => {
    
                const vertices = [];
    
                Traversal.depthFirst(graph, (vertex) => vertices.push(vertex));
    
                expect(vertices).to.equal([0, 1, 2, 3, 4, 7, 5, 6, 8]);
            });
        });
    });

    describe('Undirected', () => {

        let graph;

        beforeEach(() => {
    
            /*
             * 0-------1------5-------6-----------8 
             *          \              \
             *           2--------------3
             *            \----------------------4
             *             \----7
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
        });
    
        describe('breadthFirst', () => {
    
            it('should visit graph in correct order', () => {
    
                const vertices = [];
    
                Traversal.breadthFirst(graph, 2, (vertex) => vertices.push(vertex));
    
                expect(vertices).to.equal([2, 1, 3, 4, 7, 0, 5, 6, 8]);
            });
        });
    
        describe('depthFirst', () => {
    
            it('should visit graph in correct order', () => {
    
                const vertices = [];
    
                Traversal.depthFirst(graph, (vertex) => vertices.push(vertex));
    
                expect(vertices).to.equal([0, 1, 2, 3, 6, 5, 8, 4, 7]);
            });
        });
    });
});
