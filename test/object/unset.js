'use strict';

module.exports = () => {
    const utils = {
        object: _path.require('/object'),
    };
    it('unset', () => {
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
        utils.object.unset(obj, 'a');
        _expect(obj.a).to.be.undefined;
        utils.object.unset(obj, 'b.a.b');
        _expect(obj.b.a.b).to.be.undefined;
        utils.object.unset(obj, 'b.k.i');
        _expect(obj.b.k).to.be.undefined;
    });
};