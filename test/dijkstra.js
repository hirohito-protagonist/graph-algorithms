const { expect } = require('code');
const Lab = require('lab');
const { beforeEach, describe, it } = exports.lab = Lab.script();

const AdjacencyMatrixGraph = require('./../lib/adjacency-matrix-graph');
const ShortestPathDijkstra = require('./../lib/dijkstra');

describe('Dijkstra shortest path', () => {
        
    let graph;

    beforeEach(() => {

        /*
         *    0-------1--------4-------5-----3-----6
         *    |       |\____________________/|     |
         *    |       |                      |     |
         *    |       2----------------------+     |
         *    |                                    |
         *    +------7-----------------------------+
         */
        graph = new AdjacencyMatrixGraph(8);
        graph.addEdge(0, 1, 1);
        graph.addEdge(1, 2, 2);
        graph.addEdge(1, 3, 6);
        graph.addEdge(2, 3, 2);
        graph.addEdge(1, 4, 3);
        graph.addEdge(3, 5, 1);
        graph.addEdge(5, 4, 5);
        graph.addEdge(3, 6, 1);
        graph.addEdge(6, 7, 1);
        graph.addEdge(0, 7, 8);
    });

    it('should find', () => {

        expect(ShortestPathDijkstra(graph, 0, 6)).to.equal([0, 1, 2, 3, 6]);
        expect(ShortestPathDijkstra(graph, 4, 7)).to.equal([4, 5, 3, 6, 7]);
        expect(ShortestPathDijkstra(graph, 7, 0)).to.equal([7, 6, 3, 2, 1, 0]);
    });
});
