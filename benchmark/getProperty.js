'use strict';

const Benchmark = require('benchmark'),
    _ = {
        get: require('lodash/get'),
    },
    get = require('../object/get.js'),
    a = {
        b: {c: {d: {e: 'f'}}},
        j: null,
        // m: 'asdasd',
    };

// add tests
(new Benchmark.Suite)
    .add('utils.object.get', () => {
        get(a, 'm', true);
        get(a, 'm.j.k', true);
        get(a, 'b');
        get(a, 'b.c');
        get(a, 'b.c');
        get(a, 'b.c');
        get(a, 'b.c');
        get(a, 'b.c.d');
        get(a, 'b.c.j');
        get(a, 'j');
        get(a, 'j.b.c.j');
    })
    .add('_.get', () => {
        _.get(a, 'm', true);
        _.get(a, 'm.j.k', true);
        _.get(a, 'b');
        _.get(a, 'b.c');
        _.get(a, 'b.c');
        _.get(a, 'b.c');
        _.get(a, 'b.c');
        _.get(a, 'b.c.d');
        _.get(a, 'b.c.j');
        _.get(a, 'j');
        _.get(a, 'j.b.c.j');
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        process.exit();
    })
    .run();

// (new Benchmark.Suite)
//     .add('indexOf', () => {
//         'b.c'.indexOf('.');
//         'b'.indexOf('.');
//     })
//     .add('includes', () => {
//         'b.c'.includes('.');
//         'b'.includes('.');
//     })
//     .on('cycle', (event) => console.log(String(event.target)))
//     .on('complete', function() {
//         console.log('Fastest is ' + this.filter('fastest').map('name'));
//         // process.exit();
//     })
//     .run();
