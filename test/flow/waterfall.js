'use strict';

module.exports = () => {
    describe('waterfall', () => {
        const utils = {
            waterfall: _path.require('/flow/waterfall.js'),
        };
        it('success', (done) => {
            const functions = [
                (cb) => {
                    // console.log('one');
                    cb(null);
                },
                (cb) => {
                    // console.log('two');
                    cb(null);
                },
                (cb) => {
                    // console.log('tree');
                    cb(null);
                },
                (cb) => {
                    // console.log('four');
                    cb(null);
                },
                (cb) => {
                    // console.log('five');
                    cb(null);
                },
            ];
            utils.waterfall(functions, (err) => {
                // console.log('#err', require('util').inspect(err, 0, 10, 1));
                _expect(err).to.be.null;
                done();
            });
        });
        it('error', (done) => {
            const functions = [
                (cb) => {
                    // console.log('one');
                    cb(null);
                },
                (cb) => {
                    // console.log('two');
                    cb('err');
                },
                (cb) => {
                    // console.log('tree');
                    cb(null);
                },
                (cb) => {
                    // console.log('four');
                    cb(null);
                },
                (cb) => {
                    // console.log('five');
                    cb(null);
                },
            ];
            utils.waterfall(functions, (err) => {
                // console.log('#err', require('util').inspect(err, 0, 10, 1));
                _expect(err).to.be.equal('err');
                done();
            });
        });
    });
};