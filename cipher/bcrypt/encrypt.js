'use strict';

const bcrypt = {
    genSalt: require('bcrypt').genSalt,
    hash: require('bcrypt').hash,
};

module.exports = (value) => bcrypt.genSalt(5).then((salt) => bcrypt.hash(value, salt));
