'use strict';

const core = {
    crypto: require('../core/crypto.js'),
    base64urlEncode: require('../core/base64urlEncode.js'),
    jwtHeader: require('../core/jwtHeader.js'),
};

module.exports = (payload, secret) => {
    payload = core.base64urlEncode(JSON.stringify(payload));
    const hash = core.crypto
        .createHmac('sha256', secret)
        .update(`${core.jwtHeader.hash}.${payload}`)
        .digest('base64');
    return `${core.jwtHeader.hash}.${payload}.${hash}`;
};