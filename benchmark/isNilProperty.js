'use strict';

const Benchmark = require('benchmark'),
    _ = {
        get: require('lodash/get'),
        isNil: require('lodash/isNil'),
    },
    a = {b: {c: {d: {e: 'f'}}}},
    isNil = require('../object/isNil.js');

/*eslint-disable no-console, no-unused-vars */
// console.log(_.isNil(_.get(a, 'b.c.d.e')));
// console.log(isNil(a, 'b.c.d.e'));
// console.log(_.isNil(_.get(a, 'b.c.j')));
// console.log(isNil(a, 'b.c.j'));

// add tests
(new Benchmark.Suite)
    .add('utils.object.isNil', () => {
        isNil(a, 'b');
        isNil(a, 'b.c');
        isNil(a, 'b.c');
        isNil(a, 'b.c');
        isNil(a, 'b.c');
        isNil(a, 'b.c.d');
        isNil(a, 'b.c.j');
    })
    .add('_.isNil(_.get())', () => {
        _.isNil(_.get(a, 'b'));
        _.isNil(_.get(a, 'b.c'));
        _.isNil(_.get(a, 'b.c'));
        _.isNil(_.get(a, 'b.c'));
        _.isNil(_.get(a, 'b.c'));
        _.isNil(_.get(a, 'b.c.d'));
        _.isNil(_.get(a, 'b.c.j'));
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        process.exit();
    })
    .run();