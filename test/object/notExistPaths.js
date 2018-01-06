'use strict';

module.exports = () => {
    const utils = {
        object: _path.require('/object'),
    };
    it('notExistPaths', () => {
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
        _expect(utils.object.notExistPaths(obj, ['a.b', 'b.a', 'b.b'])[0]).to.equal('b.b');
        _expect(utils.object.notExistPaths(obj, ['a.b', 'b.a'])).to.be.empty;
    });
};