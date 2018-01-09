## Changelog

Todos los cambios importantes son escritos aquí. El Formato esta basado en [Keep a Changelog](http://keepachangelog.com/es-ES/1.0.0/)

### [Unreleased]

### [1.1.0] - 2018-01-09
#### Changed
- Se cambia el modulo npm para las utilidades de bcrypt
- Los metodos de encriptar y descriptar son ahora asincronos

### [1.0.2] - 2018-01-06
#### Changed
- Se agrega documentación para la utilidad jwt

### [1.0.1] - 2018-01-05
#### Fixed
- Error en listado de utilidades en documentación (README.md)

### [1.0.0] - 2018-01-05
#### Added
- Utilidad para realizar un **capitalize** (primer carácter en mayúscula) a una cadena de caracteres
- Utilidad para validar que existan paths de un objeto y retornar aquellos que no existan
- utilidad **random** para colores en hexadecimal y para valores con caracteres especiales o no, según se requiera
- Utilidad para ejecutar funciones en orden **waterfall**
- Utilidades para manipular booleanos (valid, parse)
- Encriptar utilizando el algoritmo [AES o Advanced encryption standard][AES]
- Encriptar utilizando el algoritmo [Bcrypt][Bcrypt]
- Utilidad para estandarizar el trabajo con nombres y códigos de países basado en la [ISO - 3166][iso3166]
- Utilidades para manipular objeto (get, set, isNil, unset)
- Utilidad para obtener un listado de rutas a tributos de un objeto, que cumplan las condiciones de una función
- Utilidad para hacer registro de información basada en [winston][winston] (logger)

[AES]: https://en.wikipedia.org/wiki/Advanced_Encryption_Standard
[Bcrypt]: https://en.wikipedia.org/wiki/Bcrypt
[iso3166]: http://en.wikipedia.org/wiki/ISO_3166-1#Officially_assigned_code_elements
[winston]: https://www.npmjs.com/package/winston