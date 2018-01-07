class Node {

    constructor(vertexId) {
        this.vertexId = vertexId;
        this.adjacencySet = new Set();
    }

    addEdge(vertex) {

        if (this.vertexId === vertex) {
            throw new TypeError(`The vertex ${vertex} cannot be adjacent to itself`);
        }
        this.adjacencySet.add(vertex);
    }

    getAdjacentVertices() {

        return Array.from(this.adjacencySet.entries());
    }
}

module.exports = Node;