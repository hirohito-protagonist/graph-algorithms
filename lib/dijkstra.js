'use strict';
const Utils = require('./utils');

module.exports = (graph, source, destination) => {

    const distanceMap = Utils.priorityDistanceTable(graph, source);

    let path = [destination];
    let previousVertex = distanceMap[destination][1];
    
    while (previousVertex !== source) {

        path = [previousVertex, ...path];
        previousVertex = distanceMap[previousVertex][1];
    }
    
    path = [source, ...path];
    return path;
};
