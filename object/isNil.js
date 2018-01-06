'use strict';

module.exports = (obj, path) => {
    if (path.indexOf('.') === -1) return obj[path] == null;
    let attr,
        flag = false,
        p = path.split('.'),
        i = 0;
    attr = obj[p[i]];
    i = 1;
    flag = attr == null;
    for (; i < p.length && !flag; i++) {
        attr = attr[p[i]];
        flag = attr == null;
    }
    return flag;
};