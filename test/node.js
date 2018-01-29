const { expect } = require('code');
const Lab = require('lab');
const { beforeEach, describe, it } = exports.lab = Lab.script();

const Node = require('./../lib/node');

describe('Node', () => {
        
    let node;

    beforeEach(() => {

        node = new Node(1);
    });

    it('should throw exception when vertex have the same id like node', () => {

        try {
            node.addEdge(1);
        } catch(e) {

            expect(e.message).to.equal('The vertex 1 cannot be adjacent to itself');
        }
    });

    it('should vertex to set', () => {

        node.addEdge(2);
        node.addEdge(3);
        node.addEdge(2);
        expect(node.getAdjacentVertices().length).to.equal(2);
    });
});
