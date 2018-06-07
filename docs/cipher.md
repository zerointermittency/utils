# cipher

Métodos con el objetivo de (des)encriptar, comparar o encontrar.

```javascript
const utils = require('@zerointermittency/utils'),
    cipher = utils.cipher;

// or

const cipher = require('@zerointermittency/utils/cipher');
```

### Método "aes256.encrypt"

Utiliza el algoritmo [AES o Advanced encryption standard][AES], específicamente aplicando su principio para encriptar en 256-bit.

```javascript
const encrypted = cipher.aes256.encrypt(str, secret);
```

**Argumentos**:

- str \(*String*\) **required**: valor a encriptar
- secret \(*String*\) **required**: palabra secreta/clave para (des)encriptar

**Retorna**:

- \(*String*\): Retorna el valor encriptado de **str** con el **secret** pasados como argumentos


### Método "aes256.decrypt"

Este método desencripta el string encriptado en el método **aes256.encrypt**.

```javascript
const str = cipher.aes256.decrypt(encrypted, secret);
```

**Argumentos**:

- encrypted \(*String*\) **required**: valor encriptado en **aes256.encrypt**
- secret \(*String*\) **required**: palabra secreta/clave utilizada en **aes256.encrypt**

**Retorna**:

- \(*String*\): Retorna el valor desencriptado que se había generado en  **aes256.encrypt**


### Método "bcrypt.encrypt"

Este método utiliza el algoritmo [Bcrypt][Bcrypt].

> Es utilizado para encriptar password, y es el algoritmo por defecto en [OpenBSD][OpenBSD]

```javascript
const encrypted = cipher.bcrypt.encrypt(str);
```

**Argumentos**:

- str \(*String*\) **required**: valor a encriptar

**Retorna**:

- \(*String*\): Retorna el valor encriptado de **str**

### Método "bcrypt.compare"

A diferencia de **aes256.decrypt**, en el algoritmo de bcrypt no se desencripta un valor, sino que compara.

```javascript
const valid = cipher.bcrypt.compare(str, encrypted);
```

**Argumentos**:

- str \(*String*\) **required**: valor a comparar
- encrypted \(*String*\) **required**: valor encriptado en **bcrypt.encrypt**

**Retorna**:

- \(*Boolean*\): Retorna verdadero o falso según el resultado de la comparación

[AES]: https://en.wikipedia.org/wiki/Advanced_Encryption_Standard
[Bcrypt]: https://en.wikipedia.org/wiki/Bcrypt
[OpenBSD]: https://en.wikipedia.org/wiki/OpenBSD