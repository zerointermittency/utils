'use strict';

const crypto = {
    createDecipher: require('crypto').createDecipher,
};

module.exports = (str, secret) => {
    if (!secret) throw Error('secret is required');
    let decipher = crypto.createDecipher('aes256', secret),
        decrypted = decipher.update(str, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};
