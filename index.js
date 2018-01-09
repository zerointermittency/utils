'use strict';

const fs = {
        readdirSync: require('fs').readdirSync,
        statSync: require('fs').statSync,
    },
    utils = {},
    files = fs.readdirSync(__dirname),
    omit = [
        'coverage',
        'core',
        'test',
        'node_modules',
        '.nyc_output',
        '.git',
        'docs',
        'benchmark',
    ];

for (let i = files.length - 1; i >= 0; i--) {
    const key = files[i],
        isDirectory = !fs.statSync(`${__dirname}/${key}`).isDirectory();
    if (isDirectory || omit.indexOf(key) !== -1)
        continue;
    utils[key.replace('.js', '')] = require(`./${key}`);
}

module.exports = utils;