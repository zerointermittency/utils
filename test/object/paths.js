'use strict';

module.exports = () => {
    const utils = {
        object: _path.require('/object'),
    };
    it('paths', () => {
        const obj = {
                a: {b: 'c'},
                b: {a: {b: 'c'}},
                c: {b: {a: {b: 'c'}}},
                d: {c: {b: {a: {b: 'c'}}}},
                e: [{a: {b: 'c'}}],
                f: {c: {b: {a: null}}},
                g: {c: {b: {a: () => new Date()}}},
                h: {c: {b: {a: 0}}},
                i: {c: {1: {b: 'c'}}},
                j: {c: {1: {b: 'c', a: true, c: false}}},
            },
            a = ['c', null];
        obj.self = obj;
        let fn = (prop) => prop === 'c',
            fnb = (prop) => prop['b'] === 'c',
            aPaths = utils.object.paths(a, fn),
            cPaths = utils.object.paths(obj.c, fn, 'c'),
            resultPaths = utils.object.paths(obj, fn),
            resultb = utils.object.paths(obj, fnb),
            allPaths = utils.object.paths(obj, (attr) => {
                let flag = true;
                flag &= typeof attr !== 'object';
                flag &= !Array.isArray(attr);
                return flag;
            });
        // console.log('#aPaths', require('util').inspect(aPaths, 0, 10, 1));
        // console.log('#cPaths', require('util').inspect(cPaths, 0, 10, 1));
        // console.log('#resultPaths', require('util').inspect(resultPaths, 0, 10, 1));
        // console.log('#resultb', require('util').inspect(resultb, 0, 10, 1));
        // console.log('#allPaths', require('util').inspect(allPaths, 0, 10, 1));
        _expect(aPaths).to.be.an('array');
        _expect(aPaths).to.include('0');
        _expect(cPaths).to.be.an('array');
        _expect(cPaths[0]).to.be.equal('c.b.a.b');
        _expect(resultPaths).to.include('a.b');
        _expect(resultPaths).to.not.include('j.c.1.a');
        _expect(resultPaths).to.include.members([
            'j.c.1.b', 'i.c.1.b', 'e.0.a.b', 'd.c.b.a.b', 'c.b.a.b',
            'b.a.b', 'a.b',
        ]);
        _expect(resultb).to.include.members([
            'j.c.1', 'i.c.1', 'e.0.a', 'd.c.b.a', 'c.b.a', 'b.a', 'a',
        ]);
        _expect(allPaths).to.include.members([
            'j.c.1.c', 'j.c.1.a', 'j.c.1.b', 'i.c.1.b', 'h.c.b.a',
            'g.c.b.a', 'e.0.a.b', 'd.c.b.a.b', 'c.b.a.b', 'b.a.b',
            'a.b',
        ]);
    });
};
