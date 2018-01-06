'use strict';

const crypto = {
    createCipher: require('crypto').createCipher,
};

module.exports = (str, secret) => {
    if (!secret) throw Error('secret is required');
    let cipher = crypto.createCipher('aes256', secret),
        encrypted = cipher.update(str, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};
