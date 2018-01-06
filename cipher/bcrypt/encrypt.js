'use strict';

const bcrypt = {
    genSaltSync: require('bcrypt-nodejs').genSaltSync,
    hashSync: require('bcrypt-nodejs').hashSync,
};

module.exports = (value) => bcrypt.hashSync(value, bcrypt.genSaltSync(5));
