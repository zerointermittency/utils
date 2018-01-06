'use strict';

module.exports = (obj, fn, parent, result) => {
    const stack = [];
    return (function paths (obj, fn, parent, result = []) {
        if (Array.isArray(obj)) {
            for (let i = obj.length - 1; i >= 0; i--) {
                let value = obj[i],
                    index = i,
                    path = (parent) ? `${parent}.${index}` : `${index}`;
                if (value == undefined) continue;
                paths(value, fn, path, result);
                if (fn(value, path, result)) result.push(path);
            }
        } else if (typeof obj === 'object') {
            if (stack.indexOf(obj) !== -1) return;
            else stack.push(obj);
            const keys = Object.keys(obj);
            for (let i = keys.length - 1; i >= 0; i--) {
                const index = keys[i],
                    path = (parent) ? `${parent}.${index}` : `${index}`;
                if (obj[index] == undefined) continue;
                paths(obj[index], fn, path, result);
                if (fn(obj[index], path, result)) result.push(path);
            }
        }
        return result;
    })(obj, fn, parent, result);
};