'use strict';
const Utils = require('./utils');

const internal = {};

internal.depthFirst = (graph, cb, visited, current = 0) => {
        
    if (visited[current] === 1) {
        return;
    }

    visited[current] = 1;
    
    cb(current);

    graph.getAdjacentVertices(current)
        .forEach((vertex) => internal.depthFirst(graph, cb, visited, vertex));
};

module.exports = {

    breadthFirst: (graph, start = 0, cb = () => {}) => {

        const queue = [];
        const visited = Utils.createArray(graph.vertices);
        
        queue.push(start);

        while (queue.length !== 0) {

            const vertex = queue.shift();

            if (visited[vertex] === 1) {
                continue;
            }

            cb(vertex);

            visited[vertex] = 1;
            graph.getAdjacentVertices(vertex)
                .filter((v) => visited[v] !== 1)
                .forEach((v) => queue.push(v));
        }
    },

    depthFirst: (graph, cb = () => {}) => {

        const visited = Utils.createArray(graph.vertices);

        internal.depthFirst(graph, cb, visited);
    }
};