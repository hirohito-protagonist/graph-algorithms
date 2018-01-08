'use strict';
const Node = require('./node');

class AdjacencySetGraph {

    constructor(vertices, directed = false) {

        this.vertices = vertices;
        this.directed = directed;
        this.vertexList = [];

        for (let index = 0; index < vertices; index++) {
            this.vertexList.push(new Node(index));
        }
    }

    addEdge(v1, v2, weight = 1) {
        
        if (v1 >= this.vertices || v2 >= this.vertices || v1 < 0 || v2 < 0) {
            throw new TypeError(`Vertices ${v1} and ${v2} are out of bounds`);
        }
        
        if (weight < 1) {
            throw new TypeError('An edge cannot have weight < 1');
        }
        
        this.vertexList[v1].addEdge(v2);
        if (this.directed === false) {
            this.vertexList[v2].addEdge(v1);
        }
    }

    getAdjacentVertices(vertex) {

        if (vertex < 0 || vertex >= this.vertices) {
            throw new TypeError(`Cannot access vertex ${vertex}`);
        }
        return this.vertexList[vertex].getAdjacentVertices();
    }

    getInDegree(vertex) {

        if (vertex < 0 || vertex >= this.vertices) {
            throw new TypeError(`Cannot access vertex ${vertex}`);
        }
        
        let inDegree = 0;

        for (let index = 0; index < this.vertices; index++) {
            if (this.getAdjacentVertices(index).find(v => v === vertex)) {
                inDegree += 1;
            }
            
        }
        return inDegree;
    }

    getEdgeWeight(v1, v2) {
        return 1;
    }

    toString() {
        const out = [];

        for (let i = 0; i < this.vertices; i++) {
            this.getAdjacentVertices(i).forEach((v) => {

                out.push(`${i} --> ${v}`);
            });
            
        }
        return out.join(' | ');
    }
}

module.exports = AdjacencySetGraph;