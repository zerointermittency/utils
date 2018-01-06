'use strict';

describe('logger', () => {
    const pathLogs = _path.get('/test/logs'),
        infoPath = `${pathLogs}info.log`,
        errorPath = `${pathLogs}error.log`,
        utils = {
            logger: _path.require('/logger'),
        };
    before(() => {
        const logger = utils.logger({
            transports: [{
                type: 'File',
                options: {
                    name: 'info-file',
                    filename: infoPath,
                    level: 'info',
                },
            }, {
                type: 'File',
                options: {
                    name: 'error-file',
                    filename: errorPath,
                    level: 'error',
                },
            }],
        });
        logger.info('info');
        logger.error('error');
    });
    it('file', function(done) {
        this.timeout(300);
        const date = (new _ZIDate()).toISOString();
        setTimeout(() => {
            _assert(
                _fs.readFileSync(infoPath).toString(),
                `{"level":"info","message":"info","timestamp":"${date}"}\n{"level":"error","message":"error","timestamp":"${date}"}\n`
            );
            _assert(
                _fs.readFileSync(errorPath).toString(),
                `{"level":"error","message":"error","timestamp":"${date}"}\n`
            );
            done();
        }, 200);
    });
    it('console', (done) => {
        const inspect = _stdout.inspect(),
            logger = utils.logger({
                transports: [{
                    type: 'Console',
                    options: {
                        level: 'info',
                    },
                }],
            });
        logger.info('foo');
        let date = (new _ZIDate()).toISOString(),
            print = `${date} - \u001b[32minfo\u001b[39m: foo\n`;
        inspect.restore();
        _assert.equal(inspect.output[0], print);
        done();
    });
    it('console default options', (done) => {
        const inspect = _stdout.inspect(),
            logger = utils.logger({
                level: 'info',
                transports: [{
                    type: 'Console',
                }],
            });
        logger.info('foo');
        let date = (new _ZIDate()).toISOString(),
            print = `${date} - \u001b[32minfo\u001b[39m: foo\n`;
        inspect.restore();
        _assert.equal(inspect.output[0], print);
        done();
    });
    after(() => {
        _fs.unlinkSync(infoPath);
        _fs.unlinkSync(errorPath);
    });
});
