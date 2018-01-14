'use strict';
const Utils = require('./utils');

module.exports = (graph) => {

    const queue = [];
    const inDegreeMap = {};
    const sortedList = [];

    Utils.createArray(graph.vertices)
        .forEach((v, i) => {

            inDegreeMap[i] = graph.getInDegree(i);
            if (inDegreeMap[i] === 0) {
                queue.push(i);
            }
        });


    while (queue.length !== 0) {
        const vertex = queue.shift();
        sortedList.push(vertex);
        graph.getAdjacentVertices(vertex)
            .forEach((v, i) => {

                inDegreeMap[v] = inDegreeMap[v] - 1;
                if (inDegreeMap[v] === 0) {
                    queue.push(v);
                }
            });
    }

    if (sortedList.length !== graph.vertices) {
        throw new TypeError('This graph has a cycle!');
    }

    return sortedList
};
