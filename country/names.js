'use strict';

const countries = require('i18n-iso-countries');

module.exports = (language = 'en') => countries.getNames(language);
