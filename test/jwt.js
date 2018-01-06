'use strict';

describe('jwt', () => {
    const utils = {
            jwt: _path.require('/jwt'),
        },
        _headerToken = 'eyJ0eXBlIjoiSldUIiwib3JpZ2luIjoiemktdXRpbHMifQ==';
    it('success: jwt.encode', (done) => {
        const payload = {
                ipInfo: '200.111.103.18',
            },
            secret = 'secret',
            token = utils.jwt.encode(payload, secret),
            segments = token.split('.');
        _expect(segments.length).to.be.equal(3);
        _expect(segments[0]).to.be.equal(_headerToken);
        done();
    });
    it('success: jwt.decode', (done) => {
        const payload = {
                ipInfo: '200.111.103.18',
            },
            secret = 'secret',
            token = utils.jwt.encode(payload, secret),
            segments = token.split('.');
        _expect(segments.length).to.be.equal(3);
        _expect(segments[0]).to.be.equal(_headerToken);
        _expect(utils.jwt.decode(token, secret).ipInfo).to.equal('200.111.103.18');
        done();
    });
    it('catch: jwt.decode - Not enough or too many segments', (done) => {
        const decode = () => utils.jwt.decode('asdads');
        _expect(decode).to.throw('Not enough or too many segments');
        done();
    });
    it('catch: jwt.decode - Signature verification failed', (done) => {
        const decode = () => utils.jwt.decode(`${_headerToken}.sadadas.asdad`, 'asdasd');
        _expect(decode).to.throw('Signature verification failed');
        done();
    });
});