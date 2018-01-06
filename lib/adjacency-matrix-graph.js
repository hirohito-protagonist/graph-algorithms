'use strict';
const Utils = require('./utils');

class AdjacencyMatrixGraph {

    constructor(vertices, directed = false) {

        this.vertices = vertices;
        this.directed = directed;
        this.matrix = Utils.matrix(vertices);
    }

    addEdge(v1, v2, weight = 1) {
        
        if (v1 >= this.vertices || v2 >= this.vertices || v1 < 0 || v2 < 0) {
            throw new TypeError(`Vertices ${v1} and ${v2} are out of bounds`);
        }
        
        if (weight < 1) {
            throw new TypeError('An edge cannot have weight < 1');
        }
        
        this.matrix[v1][v2] = weight;
        if (this.directed === false) {
            this.matrix[v2][v1] = weight;
        }
    }

    getAdjacentVertices(vertex) {

        if (vertex < 0 || vertex >= this.vertices) {
            throw new TypeError(`Cannot access vertex ${vertex}`);
        }

        const arr = [];

        for (let index = 0; index < this.vertices; index++) {
            if (this.matrix[vertex][index] > 0) {
                arr.push(index);
            }
            
        }
        return arr;
    }

    getInDegree(vertex) {

        if (vertex < 0 || vertex >= this.vertices) {
            throw new TypeError(`Cannot access vertex ${vertex}`);
        }
        
        let inDegree = 0;

        for (let index = 0; index < this.vertices; index++) {
            if (this.matrix[index][vertex] > 0) {
                inDegree += 1;
            }
            
        }
        return inDegree;
    }

    getEdgeWeight(v1, v2) {
        return this.matrix[v1][v2];
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

module.exports = AdjacencyMatrixGraph;