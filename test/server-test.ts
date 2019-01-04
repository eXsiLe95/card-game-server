import * as chai from 'chai';
import chaiHttp = require('chai-http');
const serverImport = require('../src/server');
const should = chai.should();

const server = serverImport.app;

chai.use(chaiHttp);

describe('Server Test', () => {
    describe('SERVER', () => {
        it('should run properly', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.message.should.be.an('string');
                    done();
                });
        });
    });
});
