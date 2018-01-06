'use strict';

module.exports = (functions, cb) => {
    function next(index) {
        functions[index]((err) => {
            if (err) return cb(err);
            index++;
            if (functions.length === index) cb(null);
            else next(index++);
        });
    }
    next(0);
};