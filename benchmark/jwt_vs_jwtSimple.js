'use strict';

const Benchmark = require('benchmark'),
    jwt = require('../jwt'),
    jwtSimple = require('jwt-simple'),
    secret = 'secret',
    payload = {foo: 'bar'},
    tokenJwt = jwt.encode(payload, secret),
    tokenJwtSimple = jwtSimple.encode(payload, secret);

/* eslint-disable no-console */
// add tests
(new Benchmark.Suite)
    .add('jwt.encode', () => {
        jwt.encode(payload, secret);
    })
    .add('jwtSimple.encode', () => {
        jwtSimple.encode(payload, secret);
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();

(new Benchmark.Suite)
    .add('jwt.decode', () => {
        jwt.decode(tokenJwt, secret);
    })
    .add('jwtSimple.decode', () => {
        jwtSimple.decode(tokenJwtSimple, secret);
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
        process.exit();
    })
    .run();
