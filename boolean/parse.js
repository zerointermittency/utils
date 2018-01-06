'use strict';

const core ={
    boolean: require('../core/boolean.js'),
};

module.exports = (value) => {
    value = String(value);
    value = value.toLowerCase();
    return core.boolean[value];
};