'use strict';

const fs = {
        readdirSync: require('fs').readdirSync,
    },
    object = {},
    files = fs.readdirSync(__dirname);

for (let i = files.length - 1; i >= 0; i--) {
    const key = files[i];
    if (key === 'index.js') continue;
    object[key.replace('.js', '')] = require(`${__dirname}/${key}`);
}

module.exports = object;