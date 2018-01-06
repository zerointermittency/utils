'use strict';

module.exports = (obj, prop, value) => {
    if (prop.indexOf('.') === -1) return obj[prop] = value;
    let attr,
        p = prop.split('.'),
        i = 0;
    /* istanbul ignore else */
    if (!obj[p[i]] || (typeof obj[p[i]] !== 'object' && !Array.isArray(obj[p[i]])))
        obj[p[i]] = {};
    attr = obj[p[i]];
    i = 1;
    for (; i < p.length; i++) {
        if (!attr[p[i]] || (typeof attr[p[i]] !== 'object' && !Array.isArray(attr[p[i]])))
            attr[p[i]] = {};
        if (i == p.length -1) attr[p[i]] = value;
        else attr = attr[p[i]];
    }
};