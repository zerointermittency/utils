# random

Métodos para la generación de elementos aleatorios (para palabras, numeros, booleanos, contraseñas, colores, etc)

```javascript
const utils = require('@zerointermittency/utils'),
    random = utils.random;

// recomendado

const random = require('@zerointermittency/utils/random');
```

### Método "color"

Con el objetivo de poder generar aleatoriamente un color en hexadecimal

```javascript
random.color()
```

**Retorna**:

- \(*String*\): Retorna string con un color en hexadecimal, ej: ```#000000```

### Método "string"

Con el objetivo de generar un **string** aleatorio con la cantidad de caracteres que estime conveniente y si contiene caracteres especiales (```!"#$%&\'()*+,-./:;<=>?@[]\^_`{|}~```) o no

```javascript
random.string(n, specialCharacters)
```

**Argumentos**:

- n \(*Number*\): número de caracteres que contendra, por defecto **8**
- specialCharacters \(*Boolean*\): activa o no los caracteres especiales, por defecto **true**

**Retorna**:

- \(*String*\): string con la cantidad de caracteres y con caracteres especiales o no segun los argumentos