'use strict';

module.exports = (obj, path) => {
    if (path.indexOf('.') === -1) {
        delete obj[path];
        return;
    }
    let attr,
        p = path.split('.'),
        i = 0;
    attr = obj[p[i]];
    i = 1;
    for (; i < p.length - 1 && attr; i++) {
        attr = attr[p[i]];
    }
    if (!attr) return;
    delete attr[p[i]];
};