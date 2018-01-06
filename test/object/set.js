'use strict';

module.exports = () => {
    const utils = {
        object: _path.require('/object'),
    };
    it('set', () => {
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
        utils.object.set(obj, 'a', 'k');
        _expect(obj.a).to.be.equal('k');
        utils.object.set(obj, 'j.m', 'k');
        _expect(obj.j.m).to.be.equal('k');
        utils.object.set(obj, 'z.x', 'k');
        _expect(obj.z.x).to.be.equal('k');
        utils.object.set(obj, 'a.k', 'k');
        _expect(obj.a.k).to.be.equal('k');
        utils.object.set(obj, 'b.a.k', 'k');
        _expect(obj.b.a.k).to.be.equal('k');
        utils.object.set(obj, 'b.a.b.c.k', 'k');
        _expect(obj.b.a.b.c.k).to.be.equal('k');
    });
};