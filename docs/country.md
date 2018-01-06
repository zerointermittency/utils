# country

Métodos para el manejo de nombres y códigos de países estandarizados, utilizando [ISO - 3166][iso3166], basado en [i18n-iso-countries][i18n-iso-countries]

```javascript
const utils = require('@zerointermittency/utils'),
    country = Nunchee.utils.country;

// recomendado

const country = require('@zerointermittency/utils/country');
```

### Método "code"

Este método encuentra cual es código de 2 letras (Alpha-2) de corresponde al nombre del país

```javascript
const code = country.code(name);
```

**Argumentos**:

- name \(*String*\) **required**: nombre de país a buscar

**Retorna**:

- \(*String*\): Retorna código de 2 letras correspondiente al país


### Método "name"

Este método nos devuelve el nombre del país en el lenguaje a partir del código de 2 letras (Alpha-2)

```javascript
const name = country.name(code, language = 'en');
```
> todos los lenguajes soportados [aquí][supported-languages]

**Argumentos**:

- code \(*String*\) **required**: código de 2 letras (Alpha-2) que corresponde al nombre del país que se desea obtener
- language \(*String*\) **required**: lenguaje en el que se desea obtener el nombre del país, por defecto **en**

**Retorna**:

- \(*String*\): Retorna el nombre del país en el lenguaje solicitado

### Método "names"

Este método nos devuelve todos los nombres de los países

```javascript
const names = country.names(language = 'en');
```

> todos los lenguajes soportados [aquí][supported-languages]

**Argumentos**:

- language \(*String*\) **required**: lenguaje en el que se desea obtener el diccionario de nombres, por defecto **en**

**Retorna**:

- \(*Object*\): Retorna el diccionario de países, donde cada llave es el código en 2 letras (Alpha-2) y el valor es el nombre en el lenguaje solicitado

[iso3166]: http://en.wikipedia.org/wiki/ISO_3166-1#Officially_assigned_code_elements
[i18n-iso-countries]:https://www.npmjs.com/package/i18n-iso-countries
[supported-languages]: https://www.npmjs.com/package/i18n-iso-countries#supported-languages-iso-639-1