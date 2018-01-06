# boolean

Métodos con el objetivo de manipular booleanos

```javascript
const utils = require('@zerointermittency/utils'),
    boolean = utils.boolean;

// recomendado

const boolean = require('@zerointermittency/utils/boolean');
```

### Método "valid"

Valida si el valor es un booleano valido.

```javascript
const boolean = boolean.valid(value);
```

**Argumentos**:

- value \(*String\|Boolean\|Number*\) **required**: valor a validar

> NOTA: los siguientes valores son validos **'true', 'false', 1, 0**

**Retorna**:

- \(*Boolean*\): Retorna si el valor es un booleano valido


### Método "parse"

Evaluá el valor y retorna si es equivalente a un booleano true o false

```javascript
const boolean = boolean.parse(value);
```

**Argumentos**:

- value \(*String\|Boolean\|Number*\) **required**: valor a validar

> NOTA: los siguientes valores son validos **'true', 'false', 1, 0**

**Retorna**:

- \(*Boolean*\): Retorna si el valor es un booleano valido