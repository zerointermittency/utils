'use strict';

const core = {
        debug: require('../core/debug.js'),
    },
    fixCountries = {
        'Afganistan': 'Afganistán',
        'Antartida': 'Antártida',
        'Azerbaiyan': 'Azerbaiyán',
        'Belgica': 'Bélgica',
        'Cape Verde Islands': 'Cabo Verde',
        'Congo DR': 'Congo (República Democrática del)',
        'Emiratos Arabes Unidos': 'Emiratos Árabes Unido',
        'England': 'Reino Unido',
        'Etiopia': 'Etiopía',
        'Gran Bretaña': 'Reino Unido',
        'Hungria': 'Hungría',
        'Inglaterra': 'Reino Unido',
        'Iran': 'Irán (República Islámica de)',
        'Islas Caiman': 'Islas Caimán',
        'Japon': 'Japón',
        'Kazajstan': 'Kazajstán',
        'Kirguistan': 'Kirguistán',
        'Libano': 'Líbano',
        'Nueva Zelanda': 'Nueva Zelandia',
        'Paises Bajos': 'Países Bajos',
        'Republica Checa': 'República Checa',
        'Republica de Corea': 'República de Corea',
        'Republica Dominicana': 'República Dominicana',
        'Russia': 'Rusia',
        'Sudafrica': 'Sudáfrica',
        'Tunez': 'Túnez',
        'USA': 'Estados Unidos',
    },
    getCountry = (country) => {
        let fix = fixCountries[country];
        if (!fix) return country;
        return fix;
    },
    countries = require('i18n-iso-countries');

module.exports = (country) => {
    const debug = core.debug('country:code');
    country = getCountry(country);
    let code = countries.getAlpha2Code(country, 'es');
    if (!code) code = countries.getAlpha2Code(country, 'en');
    if (!code) {
        debug(`country not found to "${country}"`);
        return null;
    }
    return code;
};
