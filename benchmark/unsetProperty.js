'use strict';

const Benchmark = require('benchmark'),
    _ = {
        unset: require('lodash/unset'),
    },
    unset =require('../object/unset.js'),
    a = {
        b: {c: {d: {e: 'f'}}},
        j: null,
    },
    b = {
        b: {c: {d: {e: 'f'}}},
        j: null,
    };

/*eslint-disable no-console, no-unused-vars */
// console.log(_.unset(a, 'b.c.d.e'));
// console.log(unset(a, 'b.c.d.e'));
// console.log(_.unset(a, 'b.c.j'));
// console.log(unset(a, 'b.c.j'));
// console.log(unset(a, 'j'));
// console.log(unset(a, 'j.b.c.j'));
// _.unset(a, 'm.j.k', true);

// add tests
(new Benchmark.Suite)
    .add('utils.object.unset', () => {
        unset(a, 'j');
        unset(a, 'b.c');
        unset(a, 'm.j.k');
    })
    .add('_.unset', () => {
        _.unset(b, 'j');
        _.unset(b, 'b.c');
        _.unset(b, 'm.j.k');
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        process.exit();
    })
    .run();
