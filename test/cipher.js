'use strict';

describe('cipher', () => {
    const utils = {
        cipher: _path.require('/cipher'),
    };
    it('aes256', () => {
        const aes256 = utils.cipher.aes256,
            secret = 'bar',
            value = 'foo',
            encrypted = aes256.encrypt(value, secret);
        _expect(encrypted).to.be.equal('d998809ee27b3169a3f0296be26f37e6');
        _expect(aes256.decrypt(encrypted, secret)).to.be.equal(value);
    });
    it('aes256: throw secret is required', () => {
        const aes256 = utils.cipher.aes256,
            secret = 'bar',
            value = 'foo',
            encryptedValue = aes256.encrypt(value, secret),
            encrypted = () => aes256.encrypt(value, undefined),
            decrypted = () => aes256.decrypt(encryptedValue, undefined);
        _expect(encrypted).to.throw('secret is required');
        _expect(decrypted).to.throw('secret is required');
    });
    it('bcrypt', (done) => {
        const bcrypt = utils.cipher.bcrypt,
            value = 'foo',
            encrypted = bcrypt.encrypt(value),
            compareTrue = bcrypt.compare(value, encrypted),
            compareFalse = bcrypt.compare('bar', encrypted);
        _expect(encrypted.length).to.be.equal(60);
        _expect(compareTrue).to.be.true;
        _expect(compareFalse).to.be.false;
        done();
    });
});