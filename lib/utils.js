'use strict';

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
    }
};