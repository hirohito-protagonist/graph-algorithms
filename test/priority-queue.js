const { expect } = require('code');
const Lab = require('lab');
const { describe, it } = exports.lab = Lab.script();

const PriorityQueue = require('./../lib/priority-queue');

describe('PriorityQueue', () => {
        
    it('should return elements from highest to smallest priority', () => {

        const priorityQueue = new PriorityQueue();
        priorityQueue.push('priority 9', 9);
        priorityQueue.push('priority 1', 1);
        priorityQueue.push('priority 7', 7);
        priorityQueue.push('priority 3', 3);
        
        expect(priorityQueue.size()).to.equal(4);
        expect(priorityQueue.shift()).to.equal('priority 9');
        expect(priorityQueue.shift()).to.equal('priority 7');
        expect(priorityQueue.shift()).to.equal('priority 3');
        expect(priorityQueue.shift()).to.equal('priority 1');
    });

    it('should return elements from smallest to highest priority', () => {

        const priorityQueue = new PriorityQueue();
        priorityQueue.push('priority 9', 9);
        priorityQueue.push('priority 1', 1);
        priorityQueue.push('priority 7', 7);
        priorityQueue.push('priority 3', 3);
        
        expect(priorityQueue.size()).to.equal(4);
        expect(priorityQueue.pop()).to.equal('priority 1');
        expect(priorityQueue.pop()).to.equal('priority 3');
        expect(priorityQueue.pop()).to.equal('priority 7');
        expect(priorityQueue.pop()).to.equal('priority 9');
    });
});
