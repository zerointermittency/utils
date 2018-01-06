'use strict';

const Benchmark = require('benchmark'),
    pathsWithMap = (obj, fn, parent, result) => {
        const stack = new Map;
        return (function paths (obj, fn, parent, result = []) {
            if (Array.isArray(obj)) {
                for (let i = obj.length - 1; i >= 0; i--) {
                    const value = obj[i],
                        index = i,
                        path = (parent) ? `${parent}.${index}` : `${index}`;
                    if (value == undefined) continue;
                    paths(value, fn, path, result);
                    if (fn(value, path, result)) result.push(path);
                }
            } else if (typeof obj === 'object') {
                if (stack.has(obj)) return;
                else stack.set(obj);
                const keys = Object.keys(obj);
                for (let i = keys.length - 1; i >= 0; i--) {
                    const index = keys[i],
                        path = (parent) ? `${parent}.${index}` : `${index}`;
                    if (obj[index] == undefined) continue;
                    paths(obj[index], fn, path, result);
                    if (fn(obj[index], path, result)) result.push(path);
                }
            }
            return result;
        })(obj, fn, parent, result);

    },
    pathsWithArray = (obj, fn, parent, result) => {
        const stack = [];
        return (function paths (obj, fn, parent, result = []) {
            if (Array.isArray(obj)) {
                for (let i = obj.length - 1; i >= 0; i--) {
                    const value = obj[i],
                        index = i,
                        path = (parent) ? `${parent}.${index}` : `${index}`;
                    if (value == undefined) continue;
                    paths(value, fn, path, result);
                    if (fn(value, path, result)) result.push(path);
                }
            } else if (typeof obj === 'object') {
                if (stack.indexOf(obj) !== -1) return;
                else stack.push(obj);
                const keys = Object.keys(obj);
                for (let i = keys.length - 1; i >= 0; i--) {
                    const index = keys[i],
                        path = (parent) ? `${parent}.${index}` : `${index}`;
                    if (obj[index] == undefined) continue;
                    paths(obj[index], fn, path, result);
                    if (fn(obj[index], path, result)) result.push(path);
                }
            }
            return result;
        })(obj, fn, parent, result);

    },
    a =  {
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
    fn = (prop) => prop === 'c';

a.self = a;

/*eslint-disable no-console */
// add tests
(new Benchmark.Suite)
    .add('pathsWithMap', () => pathsWithMap(a, fn))
    .add('pathsWithArray', () => pathsWithArray(a, fn))
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        process.exit();
    })
    .run();
