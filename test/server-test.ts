import * as chai from 'chai';
import chaiHttp = require('chai-http');
import serverImport = require('../src/server');

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

    describe('SECURITY', () => {
        server._router.stack.forEach((layer) => {
            if (layer.route && layer.route.path) {
                describe('route ' + layer.route.path, () => {
                    it('should set Strict-Transport-Security to max-age=15552000; includeSubDomains', (done) => {
                        chai.request(server)
                            .get(layer.route.path)
                            .end((err, res) => {
                                res.should.have.header('Strict-Transport-Security',
                                    'max-age=15552000; includeSubDomains');
                                done();
                            });
                    });
                    it('should set X-Content-Type-Options to nosniff', (done) => {
                        chai.request(server)
                            .get(layer.route.path)
                            .end((err, res) => {
                                res.should.have.header('X-Content-Type-Options', 'nosniff');
                                done();
                            });
                    });
                    it('should set X-DNS-Prefetch-Control to off', (done) => {
                        chai.request(server)
                            .get(layer.route.path)
                            .end((err, res) => {
                                res.should.have.header('X-DNS-Prefetch-Control', 'off');
                                done();
                            });
                    });
                    it('should set X-Download-Options to noopen', (done) => {
                        chai.request(server)
                            .get(layer.route.path)
                            .end((err, res) => {
                                res.should.have.header('X-Download-Options', 'noopen');
                                done();
                            });
                    });
                    it('should set X-Frame-Options to SAMEORIGIN', (done) => {
                        chai.request(server)
                            .get(layer.route.path)
                            .end((err, res) => {
                                res.should.have.header('X-Frame-Options', 'SAMEORIGIN');
                                done();
                            });
                    });
                    it('should set X-XSS-Protection to 1; mode=block', (done) => {
                        chai.request(server)
                            .get(layer.route.path)
                            .end((err, res) => {
                                res.should.have.header('X-XSS-Protection', '1; mode=block');
                                done();
                            });
                    });
                });
            }
        });
    });
});
