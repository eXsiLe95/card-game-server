import * as chai from 'chai';
import chaiHttp = require('chai-http');
import serverImport = require('../src/server');
const should = chai.should();

const server = serverImport.app;

chai.use(chaiHttp);

describe('Skip-bo Game API Test', () => {
    describe('SKIPBO', () => {
        it('should start a new game', (done) => {
            chai.request(server)
                .get('/api/skipbo/new')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.message.should.be.an('string');
                    done();
                });
        });
    });
});
