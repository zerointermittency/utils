'use strict';

const Benchmark = require('benchmark'),
    _ = {
        set: require('lodash/set'),
    },
    set =require('../object/set.js'),
    a = {
        b: {c: {d: {e: 'f'}}},
        j: null,
    },
    b = {
        b: {c: {d: {e: 'f'}}},
        j: null,
    };

/*eslint-disable no-console, no-unused-vars */
// console.log(_.set(a, 'b.c.d.e'));
// console.log(set(a, 'b.c.d.e'));
// console.log(_.set(a, 'b.c.j'));
// console.log(set(a, 'b.c.j'));
// console.log(set(a, 'j'));
// console.log(set(a, 'j.b.c.j'));
// _.set(a, 'm.j.k', true);

// add tests
(new Benchmark.Suite)
    .add('utils.object.set', () => {
        set(a, 'j', true);
        set(a, 'b.c', true);
        set(a, 'm.j.k', true);
    })
    .add('_.set', () => {
        _.set(b, 'j', true);
        _.set(b, 'b.c', true);
        _.set(b, 'm.j.k', true);
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        process.exit();
    })
    .run();
