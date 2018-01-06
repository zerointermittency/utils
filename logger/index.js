'use strict';

const winston = require('winston'),
    ZIDate = require('@zerointermittency/date');

module.exports = ({level = 'warn', transports}) => {
    transports = transports.slice(0, transports.length);
    for (let i = transports.length - 1; i >= 0; i--) {
        const defaultOptions = {
                timestamp: () => (new ZIDate()).toISOString(),
                colorize: true,
            },
            {type, options = {}} = transports[i];
        if (type === 'File') {
            defaultOptions.tailable = true;
            defaultOptions.maxFiles = 20;
            defaultOptions.maxsize = (1024 * 1024) * 5;
            defaultOptions.zippedArchive = true;
        }
        transports[i] = new winston.transports[type](
            Object.assign(defaultOptions, options)
        );
    }
    return new winston.Logger({level: level, transports: transports});
};