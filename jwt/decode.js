'use strict';

const core = {
    crypto: require('../core/crypto.js'),
    base64urlDecode: require('../core/base64urlDecode.js'),
    jwtHeader: require('../core/jwtHeader.js'),
};

module.exports = (token, secret) => {
    const segments = token.split('.');
    /* istanbul ignore else */
    if (segments.length !== 3) throw new Error('Not enough or too many segments');
    const headerSeg = JSON.parse(core.base64urlDecode(segments[0]));
    let flag = segments[2] === core.crypto
        .createHmac('sha256', secret)
        .update(`${segments[0]}.${segments[1]}`)
        .digest('base64');
    flag = flag && headerSeg.type === core.jwtHeader.type;
    flag = flag && headerSeg.origin === core.jwtHeader.origin;
    /* istanbul ignore else */
    if (!flag) throw new Error('Signature verification failed');
    return JSON.parse(core.base64urlDecode(segments[1]));
};