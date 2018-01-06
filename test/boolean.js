'use strict';

describe('boolean', () => {
    const utils = {
        boolean: _path.require('/boolean'),
    };
    it('valid', (done) => {
        const valid = utils.boolean.valid;
        _expect(valid(1)).to.be.true;
        _expect(valid(0)).to.be.true;
        _expect(valid('1')).to.be.true;
        _expect(valid('0')).to.be.true;
        _expect(valid(true)).to.be.true;
        _expect(valid(false)).to.be.true;
        _expect(valid('true')).to.be.true;
        _expect(valid('false')).to.be.true;
        _expect(valid('TRUE')).to.be.true;
        _expect(valid('FALSE')).to.be.true;
        _expect(valid('foo')).to.be.false;
        _expect(valid('bar')).to.be.false;
        done();
    });
    it('parse', (done) => {
        const parse = utils.boolean.parse;
        _expect(parse(1)).to.be.true;
        _expect(parse(0)).to.be.false;
        _expect(parse('1')).to.be.true;
        _expect(parse('0')).to.be.false;
        _expect(parse(true)).to.be.true;
        _expect(parse(false)).to.be.false;
        _expect(parse('true')).to.be.true;
        _expect(parse('false')).to.be.false;
        _expect(parse('TRUE')).to.be.true;
        _expect(parse('FALSE')).to.be.false;
        _expect(parse('foo')).to.be.undefined;
        _expect(parse('bar')).to.be.undefined;
        done();
    });
});