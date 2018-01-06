'use strict';

describe('flow', () => {
    const files = _fs.readdirSync(__dirname);
    for (let i = files.length - 1; i >= 0; i--) {
        const key = files[i];
        if (files[i] === 'index.js') continue;
        _path.require(`/test/flow/${key}`)();
    }
});