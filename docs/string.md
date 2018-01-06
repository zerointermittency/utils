# string

Métodos para la manipulación de cadenas de caracteres (string)

```javascript
const utils = require('@zerointermittency/utils'),
    string = utils.string;

// recomendado

const string = require('@zerointermittency/utils/string');
```

### Método "capitalize"

Tiene el objetivo de que el primer carácter de un string este mayúscula

```javascript
string.capitalize('hola') // Hola
```

**Retorna**:

- \(*String*\): Retorna string con su primer carácter en mayúscula
