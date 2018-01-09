'use strict';

const bcrypt = {
    compare: require('bcrypt').compare,
};

module.exports = (str, strBcrypt) => bcrypt.compare(str, strBcrypt);
