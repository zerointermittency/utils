'use strict';

const bcrypt = {
    compareSync: require('bcrypt-nodejs').compareSync,
};

module.exports = (str, strBcrypt) => bcrypt.compareSync(str, strBcrypt);
