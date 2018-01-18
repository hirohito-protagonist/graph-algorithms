'use strict';

class PriorityQueue {

    constructor() {

        this.queue = [];
    }

    push(element, priority) {
        
        let index = 0;
        while (index < this.queue.length && this.queue[index][1] > priority) {
            index++;
        }
        this.queue.splice(index, 0, [element, priority]);
        
    }

    shift() {
        return this.queue.shift()[0];
    }

    pop() {
        return this.queue.pop()[0];
    }

    size() {
        return this.queue.length;
    }
}

module.exports = PriorityQueue;