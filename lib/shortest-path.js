'use strict';
const Utils = require('./utils');

module.exports = (graph, source, destination) => {

    const distanceMap = Utils.distanceTable(graph, source);
    let path = [];
    let previousVertex = distanceMap[destination][0];

    while (previousVertex !== null && previousVertex !== source) {
        path = [previousVertex, ...path];
        previousVertex = distanceMap[previousVertex][1];
    }

    if (previousVertex === null) {
        throw new TypeError(`There is no path from ${source} to ${destination}`);
    }
    
    path = [source, ...path];
    return path;
};
