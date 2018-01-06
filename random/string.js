'use strict';

module.exports = (n = 8, specialCharacters = true) => {
    const charset = (specialCharacters) ?
        '!"#$%&\'()*+,-./:;<=>?@[]\\^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' :
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let str = '';
    for (let i = 0; i < n; i++ )
        str += charset.charAt(Math.floor(Math.random() * charset.length));
    return str;
};