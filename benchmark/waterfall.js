'use strict';

/*eslint-disable no-console, no-unused-vars */
const Benchmark = require('benchmark'),
    async = {
        waterfall: require('async/waterfall'),
    },
    waterfall = require('../flow/waterfall.js'),
    functionsError = [
        (cb) => {
            // throw Error('juiste weno');
            // setTimeout(function() {
            //     console.log('one');
            //     cb(null);
            // }, 10);
            // console.log('one');
            cb(null);
        },
        (cb) => {
            // console.log('two');
            cb(null);
        },
        (cb) => {
            // console.log('tree');
            cb('EEEEEEERRRRRRRRRROOOOOOOOORRRRRR');
        },
        (cb) => {
            // console.log('four');
            cb(null);
        },
        (cb) => {
            // console.log('five');
            cb(null);
        },
    ],
    functions = [
        (cb) => {
            // console.log('one');
            cb(null);
        },
        (cb) => {
            // console.log('two');
            cb(null);
        },
        (cb) => {
            // console.log('tree');
            cb(null);
        },
        (cb) => {
            // console.log('four');
            cb(null);
        },
        (cb) => {
            // console.log('five');
            cb(null);
        },
    ];

// async.waterfall(functionsError, (err) => {
//     console.log('#err', require('util').inspect(err, 0, 10, 1));
// });
// waterfall(functionsError, (err) => {
//     console.log('#err', require('util').inspect(err, 0, 10, 1));
// });
// async.waterfall(functionsError, (err) => {
//     console.log('#err', require('util').inspect(err, 0, 10, 1));
// });
// waterfall(functionsError, (err) => {
//     console.log('#err', require('util').inspect(err, 0, 10, 1));
// });
(new Benchmark.Suite)
    .add('async.waterfall', {
        defer: true,
        fn: (deferred) => async.waterfall(functions, () => {
            async.waterfall(functions, () => deferred.resolve());
        }),
    })
    .add('utils.flow.waterfall', {
        defer: true,
        fn: (deferred) => waterfall(functions, () => {
            waterfall(functions, () => deferred.resolve());
        }),
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        process.exit();
    })
    .run();
