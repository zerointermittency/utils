'use strict';

const countries = {
    getName: require('i18n-iso-countries').getName,
};

module.exports = (code, language = 'en') => countries.getName(code, language);
