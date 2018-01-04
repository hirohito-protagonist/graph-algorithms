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
    }
};