const Lab = require('lab');
const lab = exports.lab = Lab.script();

const beforeEach = lab.beforeEach;
const describe = lab.describe;
const it = lab.it;
const expect = Lab.expect;

const Node = require('./../lib/node');

describe('Node', () => {
        
    let node;

    beforeEach((done) => {

        node = new Node(1);
        done();
    });

    it('should throw exception when vertex have the same id like node', (done) => {

        try {
            node.addEdge(1);
        } catch(e) {

            expect(e.message).to.equal('The vertex 1 cannot be adjacent to itself');
            done();
        }
    });

    it('should vertex to set', (done) => {

        node.addEdge(2);
        node.addEdge(3);
        node.addEdge(2);
        expect(node.getAdjacentVertices().length).to.equal(2);
        done();
    });
});
