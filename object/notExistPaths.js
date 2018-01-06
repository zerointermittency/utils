'use strict';

const isNil = require('./isNil.js');

module.exports = (obj, paths) => {
    const result = [];
    for (let i = paths.length - 1; i >= 0; i--) {
        const path = paths[i];
        if(isNil(obj, path)) result.push(path);
    }
    return result;
};