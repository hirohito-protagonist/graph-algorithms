'use strict';
const Utils = require('./utils');

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
    }
};