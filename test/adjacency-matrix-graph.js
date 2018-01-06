const Lab = require('lab');
const lab = exports.lab = Lab.script();

const beforeEach = lab.beforeEach;
const describe = lab.describe;
const it = lab.it;
const expect = Lab.expect;

const AdjacencyMatrixGraph = require('./../lib/adjacency-matrix-graph');

describe('AdjacencyMatrixGraph', () => {

    describe('addEdge', () => {

        [
            { v1: 0, v2: -1 },
            { v1: -1, v2: 0 },
            { v1: 4, v2: 0 },
            { v1: 0, v2: 4 }
        ].forEach((testData) => {
           
            it(`should throw exception when vertices ${testData.v1} and ${testData.v2} are out of bounds`, (done) => {

                try {
                    const graph = new AdjacencyMatrixGraph(4);
                    graph.addEdge(testData.v1, testData.v2);                
                } catch(e) {
                    expect(e.message).to.equal(`Vertices ${testData.v1} and ${testData.v2} are out of bounds`);
                    done();
                }            
            });
        });

        it('should throw exception when weight is less than one', (done) => {

            try {
                const graph = new AdjacencyMatrixGraph(4);
                graph.addEdge(0, 1, 0);                
            } catch(e) {
                expect(e.message).to.equal('An edge cannot have weight < 1');
                done();
            }
            
        });
    });

    describe('getAdjacentVertices', () => {

        [
            { vertex: -1 },
            { vertex: 4 },
        ].forEach((testData) => {
           
            it(`should throw exception when number of vertex ${testData.vertex} is out of range`, (done) => {

                try {
                    const graph = new AdjacencyMatrixGraph(4);
                    graph.getAdjacentVertices(testData.vertex);                
                } catch(e) {
                    expect(e.message).to.equal(`Cannot access vertex ${testData.vertex}`);
                    done();
                }            
            });
        });
    });

    describe('getInDegree', () => {

        [
            { vertex: -1 },
            { vertex: 4 },
        ].forEach((testData) => {
           
            it(`should throw exception when number of vertex ${testData.vertex} is out of range`, (done) => {

                try {
                    const graph = new AdjacencyMatrixGraph(4);
                    graph.getInDegree(testData.vertex);                
                } catch(e) {
                    expect(e.message).to.equal(`Cannot access vertex ${testData.vertex}`);
                    done();
                }            
            });
        });
    });

    describe('Directed', () => {

        let graph;

        beforeEach((done) => {
    
            /*
             *  0 -----------> 1
             *  |
             *  | ------------>2------------>3
             * 
             */
            graph = new AdjacencyMatrixGraph(4, true);
            graph.addEdge(0, 1);
            graph.addEdge(0, 2);
            graph.addEdge(2, 3);
            done();
        });
            
        it('should get adjacent', (done) => {
    
            
            expect(graph.getAdjacentVertices(0)).to.equal([1 ,2]);
            expect(graph.getAdjacentVertices(1)).to.equal([]);
            expect(graph.getAdjacentVertices(2)).to.equal([3]);
            expect(graph.getAdjacentVertices(3)).to.equal([]);
            done();
        });
    
    
        it('should get in degree', (done) => {
    
            expect(graph.getInDegree(0)).to.equal(0);
            expect(graph.getInDegree(1)).to.equal(1);
            expect(graph.getInDegree(2)).to.equal(1);
            expect(graph.getInDegree(3)).to.equal(1);
            done();
        });
    
        it('should get edge weight', (done) => {
    
            expect(graph.getEdgeWeight(0, 1)).to.equal(1);
            expect(graph.getEdgeWeight(0, 2)).to.equal(1);
            expect(graph.getEdgeWeight(1, 0)).to.equal(0);
            expect(graph.getEdgeWeight(2, 0)).to.equal(0);
            expect(graph.getEdgeWeight(2, 3)).to.equal(1);
            expect(graph.getEdgeWeight(3, 2)).to.equal(0);
            done();
        });
    
        it('should print graph', (done) => {
    
            expect(graph.toString()).to.equal('0 --> 1 | 0 --> 2 | 2 --> 3');
            done();
        });
    });

    describe('Undirected', () => {

        let graph;

        beforeEach((done) => {
    
            /*
             *  0 ----------- 1
             *  |
             *  | ------------2------------3
             * 
             */
            graph = new AdjacencyMatrixGraph(4);
            graph.addEdge(0, 1);
            graph.addEdge(0, 2);
            graph.addEdge(2, 3);
            done();
        });
            
        it('should get adjacent', (done) => {
    
            
            expect(graph.getAdjacentVertices(0)).to.equal([1 ,2]);
            expect(graph.getAdjacentVertices(1)).to.equal([0]);
            expect(graph.getAdjacentVertices(2)).to.equal([0 ,3]);
            expect(graph.getAdjacentVertices(3)).to.equal([2]);
            done();
        });
    
    
        it('should get in degree', (done) => {
    
            expect(graph.getInDegree(0)).to.equal(2);
            expect(graph.getInDegree(1)).to.equal(1);
            expect(graph.getInDegree(2)).to.equal(2);
            expect(graph.getInDegree(3)).to.equal(1);
            done();
        });
    
        it('should get edge weight', (done) => {
    
            expect(graph.getEdgeWeight(0, 1)).to.equal(1);
            expect(graph.getEdgeWeight(0, 2)).to.equal(1);
            expect(graph.getEdgeWeight(1, 0)).to.equal(1);
            expect(graph.getEdgeWeight(2, 0)).to.equal(1);
            expect(graph.getEdgeWeight(2, 3)).to.equal(1);
            expect(graph.getEdgeWeight(3, 2)).to.equal(1);
            done();
        });
    
        it('should print graph', (done) => {
    
            expect(graph.toString()).to.equal('0 --> 1 | 0 --> 2 | 1 --> 0 | 2 --> 0 | 2 --> 3 | 3 --> 2');
            done();
        });
    });

});
