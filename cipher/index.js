'use strict';

const fs = {
        readdirSync: require('fs').readdirSync,
    },
    cipher = {},
    files = fs.readdirSync(__dirname);

for (let i = files.length - 1; i >= 0; i--) {
    const key = files[i];
    if (key === 'index.js') continue;
    cipher[key] = require(`${__dirname}/${key}`);
}

module.exports = cipher;