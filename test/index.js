'use strict';

const Mocha = require('mocha'),
    mocha = new Mocha({reporter: process.env.REPORTER || 'spec'}),
    Path = require('wrapper-path'),
    path = new Path(`${__dirname}/../`),
    fs = {
        readdirSync: require('fs').readdirSync,
        readFileSync: require('fs').readFileSync,
        unlinkSync: require('fs').unlinkSync,
    };

global._path = path;
global._expect = require('chai').expect;
global._assert = require('chai').assert;
global._stdout = require('test-console').stdout;
global._ZIDate = require('@zerointermittency/date');
global._fs = fs;
global._utils = require('../index.js');

const files = path.recursive.files('/test/', {exclude: /(test\/index\.js|\.gitignore|\.log)$/i});
for (let i = files.length - 1; i >= 0; i--) mocha.addFile(files[i]);

// Run the tests.
mocha.run(() => process.exit());
