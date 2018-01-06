'use strict';

describe('string', () => {
    const utils = {
        string: _path.require('/string'),
    };
    it('capitalize', () => {
        const capitalize = utils.string.capitalize;
        _expect(capitalize('hola')).to.be.equal('Hola');
    });
});