'use strict';

describe('country', () => {
    const utils = {
        country: _path.require('/country'),
    };
    it('code', () => {
        _expect(utils.country.code('chile')).to.be.equal('CL');
        _expect(utils.country.code('Estados Unidos')).to.be.equal('US');
        _expect(utils.country.code('Netherlands')).to.be.equal('NL');
        _expect(utils.country.code('Países Bajos')).to.be.equal('NL');
        _expect(utils.country.code('USA')).to.be.equal('US');
        _expect(utils.country.code('Pakistan')).to.be.equal('PK');
        _expect(utils.country.code('Panama')).to.be.equal('PA');
        _expect(utils.country.code('Peru')).to.be.equal('PE');
        _expect(utils.country.code('Monaco')).to.be.equal('MC');
        _expect(utils.country.code('Morocco')).to.be.equal('MA');
        _expect(utils.country.code('Germany')).to.be.equal('DE');
        _expect(utils.country.code('Alemania')).to.be.equal('DE');
        _expect(utils.country.code('Belgica')).to.be.equal('BE');
        _expect(utils.country.code('Belgium')).to.be.equal('BE');
        _expect(utils.country.code('Bélgica')).to.be.equal('BE');
        _expect(utils.country.code('Afganistan')).to.be.equal('AF');
        _expect(utils.country.code('England')).to.be.equal('GB');
        _expect(utils.country.code('France')).to.be.equal('FR');
        _expect(utils.country.code('Brazil')).to.be.equal('BR');
        _expect(utils.country.code('Poland')).to.be.equal('PL');
        _expect(utils.country.code('Camerún')).to.be.equal('CM');
        _expect(utils.country.code('Cameroon')).to.be.equal('CM');
        _expect(utils.country.code('Romania')).to.be.equal('RO');
        _expect(utils.country.code('Algeria')).to.be.equal('DZ');
        _expect(utils.country.code('Belarus')).to.be.equal('BY');
        _expect(utils.country.code('Bhutan')).to.be.equal('BT');
        _expect(utils.country.code('Croatia')).to.be.equal('HR');
        _expect(utils.country.code('Denmark')).to.be.equal('DK');
        _expect(utils.country.code('Gabon')).to.be.equal('GA');
        _expect(utils.country.code('Greece')).to.be.equal('GR');
        _expect(utils.country.code('Haiti')).to.be.equal('HT');
        _expect(utils.country.code('Italy')).to.be.equal('IT');
        _expect(utils.country.code('Japan')).to.be.equal('JP');
        _expect(utils.country.code('Mali')).to.be.equal('ML');
        _expect(utils.country.code('Niger')).to.be.equal('NE');
        _expect(utils.country.code('Oman')).to.be.equal('OM');
        _expect(utils.country.code('Slovakia')).to.be.equal('SK');
        _expect(utils.country.code('Spain')).to.be.equal('ES');
        _expect(utils.country.code('Sweden')).to.be.equal('SE');
        _expect(utils.country.code('Switzerland')).to.be.equal('CH');
        _expect(utils.country.code('Taiwan')).to.be.equal('TW');
        _expect(utils.country.code('Tunisia')).to.be.equal('TN');
        _expect(utils.country.code('Turkey')).to.be.equal('TR');
        _expect(utils.country.code('Turkmenistan')).to.be.equal('TM');
        _expect(utils.country.code('Ukraine')).to.be.equal('UA');
        _expect(utils.country.code('Uzbekistan')).to.be.equal('UZ');
        _expect(utils.country.code('asdf')).to.be.null;
    });
    it('names', () => {
        _expect(Object.keys(utils.country.names('en')).length).to.be.equal(250);
        _expect(Object.keys(utils.country.names()).length).to.be.equal(250);
        _expect(Object.keys(utils.country.names('es')).length).to.be.equal(250);
        _expect(Object.keys(utils.country.names('asdf')).length).to.be.equal(0);
    });
    it('name', () => {
        _expect(utils.country.name('CL', 'es')).to.be.equal('Chile');
        _expect(utils.country.name('US', 'es')).to.be.equal('Estados Unidos');
        _expect(utils.country.name('US', 'en')).to.be.equal('United States of America');
        _expect(utils.country.name('US')).to.be.equal('United States of America');
    });
});