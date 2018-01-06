'use strict';

const type = 'JWT',
    origin = 'zi-utils',
    base64urlEncode = require('./base64urlEncode.js');

module.exports = {
    type,
    origin,
    hash: base64urlEncode(JSON.stringify({type, origin})),
};
