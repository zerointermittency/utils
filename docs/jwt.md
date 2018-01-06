# jwt

Con el fin de estandarizar la creación y lectura de información con **Token**, se basa en el estándar [RF7519][RF7519] y en el modulo npm [jwt-simple][jwt-simple]

```javascript
const jwt = require('@zerointermittency/utils/jwt');
```

#### Método **encode**

```javascript
const token = jwt.encode(payload, secret);
```

**Argumentos**:

- payload \(*Object*\) **required**: diccionario de información que desea tener acceso a través del **Token**
- secret \(*String*\) **required**: palabra clave con la cual se encodea y se decodea la información del token

**Retorna**:

- \(*Sttring*\): **Token** que contiene la información encriptada

#### Método **decode**

```javascript
const payload = jwt.decode(token, secret);
```

**Argumentos**:

- token \(*String*\) **required**: contiene la información encriptada
- secret \(*String*\) **required**: palabra clave con la cual se encodea y se decodea la información del token

**Retorna**:

- \(*Object*\): diccionario de información que fue encriptada en el **Token**

Con el objetivo de determinar si es suficiente optimo, se compara con npm [jwt-simple][jwt-simple]:

~~~bash
$ yarn benchmark benchmark/jwt_vs_jwtSimple.js

jwt.encode x 186,745 ops/sec ±1.86% (82 runs sampled)
jwtSimple.encode x 105,234 ops/sec ±1.09% (91 runs sampled)
Fastest is jwt.encode
jwt.decode x 130,354 ops/sec ±2.07% (86 runs sampled)
jwtSimple.decode x 86,127 ops/sec ±0.43% (90 runs sampled)
Fastest is jwt.decode
~~~


[RF7519]: https://tools.ietf.org/html/rfc7519
[jwt-simple]: https://www.npmjs.com/package/jwt-simple