'use strict';
const PriorityQueue = require('./priority-queue');

const createArray = (len) => {

    let arr = [];
    for (let index = 0; index < len; index++) {
        arr.push(void(0));
    }
    return arr;
};

module.exports = {

    matrix: (dimension, fill = 0) => {
        
        return createArray(dimension).map(() => {

            return createArray(dimension).map(() => {

                return fill;
            });
        });
    },

    createArray,

    distanceTable: (graph, source) => {

        const tableMap = {};

        createArray(graph.vertices).forEach((v, i) => {

            tableMap[i] = [void(0), void(0)];
        });

        tableMap[source] = [0, source];

        const queue = [];
        queue.push(source);

        while(queue.length !== 0) {
            const vertex = queue.shift();
            const distance = tableMap[vertex][0];

            graph.getAdjacentVertices(vertex)
                .forEach((neighbor) => {

                    if (typeof tableMap[neighbor][0] === 'undefined') {
                        tableMap[neighbor] = [1 + vertex, vertex];

                        if (graph.getAdjacentVertices(neighbor).length > 0) {
                            queue.push(neighbor);
                        }
                    }
                });
        }

        return tableMap;
    },

    priorityDistanceTable: (graph, source) => {

        const tableMap = {};

        createArray(graph.vertices).forEach((v, i) => {
    
            tableMap[i] = [void(0), void(0)];
        });
    
        tableMap[source] = [0, source];
    
        const queue = new PriorityQueue();
        queue.push(source, 0);
    
        while(queue.size() !== 0) {
            const vertex = queue.shift();
            const currentDistance = tableMap[vertex][0];
    
            graph.getAdjacentVertices(vertex)
                .forEach((neighbor) => {
    
                    const distance = currentDistance + graph.getEdgeWeight(vertex, neighbor);
                    const neighborDistance = tableMap[neighbor][0];
                    if (typeof neighborDistance === 'undefined' || neighborDistance > distance) {
                        tableMap[neighbor] = [distance, vertex];
                        queue.push(neighbor, distance);
                    }
                });
        }
    
        return tableMap;
    }
};