'use strict';

describe('random', () => {
    const utils = {
        random: _path.require('/random'),
    };
    it('color', () => {
        _expect(utils.random.color().length).to.be.equal(7);
        _expect(utils.random.color().length).to.be.equal(7);
        _expect(utils.random.color().length).to.be.equal(7);
        _expect(utils.random.color().length).to.be.equal(7);
        _expect(utils.random.color().length).to.be.equal(7);
        _expect(utils.random.color().length).to.be.equal(7);
        _expect(utils.random.color().length).to.be.equal(7);
    });
    it('string', () => {
        _expect(utils.random.string(10).length).to.be.equal(10);
        _expect(utils.random.string(10, false).length).to.be.equal(10);
        _expect(utils.random.string().length).to.be.equal(8);
        _expect(utils.random.string(undefined, false).length).to.be.equal(8);
    });
});