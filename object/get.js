'use strict';

module.exports = (obj, path, defaultValue) => {
    let flag = typeof defaultValue !== typeof undefined;
    if (path.indexOf('.') === -1) {
        if (flag && !obj[path]) return defaultValue;
        return obj[path];
    }
    let attr,
        p = path.split('.'),
        i = 0;
    attr = obj[p[i]];
    i = 1;
    for (; i < p.length && attr; i++) {
        if (flag && !attr[p[i]]) return defaultValue;
        attr = attr[p[i]];
    }
    if (i < p.length && !attr) {
        if (flag) return defaultValue;
        return undefined;
    }
    return attr;
};