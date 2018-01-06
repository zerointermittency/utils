'use strict';

module.exports = () => {
    const utils = {
        object: _path.require('/object'),
    };
    it('get', () => {
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
        _expect(utils.object.get(obj, 'a.b')).to.be.equal('c');
        _expect(utils.object.get(obj, 'm.k.j', false)).to.be.false;
        _expect(utils.object.get(obj, 'm.k.j', 'a')).to.be.equal('a');
        _expect(utils.object.get(obj, 'e.0.b', 'a')).to.be.equal('a');
        _expect(utils.object.get(obj, 'k.b', 'a')).to.be.equal('a');
        _expect(utils.object.get(obj, 'm', 'a')).to.be.equal('a');
        _expect(utils.object.get(obj, 'b.a.b')).to.be.equal('c');
        _expect(utils.object.get(obj, 'e.0.a.b')).to.be.equal('c');
        _expect(utils.object.get(obj, 'j')).to.be.null;
        _expect(utils.object.get(obj, 'k')).to.be.true;
        _expect(utils.object.get(obj, 'l')).to.be.false;
        _expect(utils.object.get(obj, 'z')).to.be.undefined;
        _expect(utils.object.get(obj, 'j.b.c')).to.be.undefined;
        _expect(utils.object.get(obj, 'k.b.c')).to.be.undefined;
        _expect(utils.object.get(obj, 'l.b.c')).to.be.undefined;
    });
};