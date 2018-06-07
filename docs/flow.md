# flow

Con el fin de poner controlar el flujo de las acciones en los programas aquí se han creado las siguientes utilidades:

## waterfall

Con el objetivo de poder controlar el flujo en que se ejecutan varias funciones se implementa este método que esta basado en [waterfall][waterfall] de [async][async]

```javascript
const utils = require('@zerointermittency/utils'),
    waterfall = utils.flow.waterfall;

// or

const waterfall = require('@zerointermittency/utils/flow/waterfall');

const functions = [
        (cb) => {
            // console.log('one');
            cb(null);
        },
        (cb) => {
            // console.log('two');
            cb(null);
        },
        (cb) => {
            // console.log('tree');
            cb(null);
        },
        (cb) => {
            // console.log('four');
            cb(null);
        },
        (cb) => {
            // console.log('five');
            cb(null);
        },
    ];

// waterfall(functions, callback);
waterfall(functions, (err) => {
    // console.log('#err', require('util').inspect(err, 0, 10, 1));
});
```

**Argumentos**:

- functions \(*Array[Function]*\) **required**: funciones a ejecutar de manera ordenada
    - cb \(*Function*\) **required**: es la función que recibe como argumento el error para detener el flujo de operaciones
- callback \(*Function*\) **required**: función que se ejecuta apenas una de las funciones retorne un error

Para comparar y determinar que el metodo es mas optimo que el de [async][async]

~~~bash
$ yarn benchmark benchmark/waterfall.js

async.waterfall x 59,026 ops/sec ±3.17% (68 runs sampled)
utils.flow.waterfall x 102,869 ops/sec ±6.51% (38 runs sampled)
Fastest is utils.flow.waterfall
~~~

[waterfall]: https://caolan.github.io/async/docs.html#waterfall
[async]: https://caolan.github.io