'use strict';

module.exports = () => {
    const utils = {
        object: _path.require('/object'),
    };
    it('isNil', () => {
        const obj = {
            a: {b: 'c'},
            b: {a: {b: 'c'}},
            c: {b: {a: {b: 'c'}}},
            d: {c: {b: {a: {b: 'c'}}}},
            e: [{a: {b: 'c'}}],
            j: null,
            k: true,
            l: false,
        };
        _expect(utils.object.isNil(obj, 'a.b')).to.be.false;
        _expect(utils.object.isNil(obj, 'b.a.b')).to.be.false;
        _expect(utils.object.isNil(obj, 'e.0.a.b')).to.be.false;
        _expect(utils.object.isNil(obj, 'j')).to.be.true;
        _expect(utils.object.isNil(obj, 'k')).to.be.false;
        _expect(utils.object.isNil(obj, 'l')).to.be.false;
        _expect(utils.object.isNil(obj, 'j.b.c')).to.be.true;
        _expect(utils.object.isNil(obj, 'k.b.c')).to.be.true;
        _expect(utils.object.isNil(obj, 'l.b.c')).to.be.true;
    });
};