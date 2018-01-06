# object

Métodos para la manipulación de objetos

```javascript
const utils = require('@zerointermittency/utils'),
    object = utils.object;

// recomendado

const object = require('@zerointermittency/utils/object');
```

### Método "get"

Con el objetivo de tener una forma optimizada de obtener un atributo según una ruta de atributos

```javascript
// object.get(obj, path, defaultValue);

const o = {
        a: {b: 'c'},
    },
    c = object.get(o, 'a.b');
    defaultValue = object.get(o, 'j.k', 'b');

// c => 'c'
// defaultValue => 'b'
```

**Argumentos**:

- obj \(*Object*\) **required**: objeto del cual se desea obtener el valor de un atributo
- path \(*String*\) **required**: ruta de atributos al que se desea obtener el valor
- defaultValue \(*\**\): valor que se desea cuando no exista un valor en el atributo que se desea obtener

**Retorna**:

- \(*\**\): Retorna valor del atributo o el valor por defecto

Es muy similar a utilizar [get][lodash-get] de [lodash][lodash], pero para mejorar el rendimiento se hizo esta implementación y al realizar una prueba de rendimiento se demuestra que mejora cercana a un 100% la cantidad de operaciones que se pueden realizar por segundos. ejecutar:

~~~bash
$ yarn benchmark benchmark/getProperty.js

utils.object.get x 706,965 ops/sec ±7.03% (84 runs sampled)
_.get x 485,702 ops/sec ±0.99% (86 runs sampled)
Fastest is utils.object.get
~~~

### Método "set"

Con el objetivo de tener una forma optimizada de setear un atributo según una ruta de atributos

> NOTA: este metodo modifica el objeto

```javascript
// object.set(obj, path, value);

const o = {
    a: {b: 'c'},
};

object.set(o, 'a.b', true);
object.set(o, 'c', 'd');

// o => {a: {b: true}, c: 'd'}
```

**Argumentos**:

- obj \(*Object*\) **required**: objeto al cual se desea modificar un atributo
- path \(*String*\) **required**: ruta de atributos al que se desea modificar el valor
- value \(*\**\) **required**: valor que tendrá el atributo

**Retorna**:

- \(*undefined*\): no retorna un valor, ya que modifica el objeto

Al igual que **get**, este método de set es muy similar a [set][lodash-set] de [lodash][lodash] y se logra mejorar cercano al 100% la cantidad de operaciones que se pueden realizar por segundos. ejecutar:

~~~bash
$ yarn benchmark benchmark/setProperty.js

utils.object.set x 2,015,554 ops/sec ±0.73% (93 runs sampled)
_.set x 1,144,270 ops/sec ±12.02% (78 runs sampled)
Fastest is utils.object.set
~~~

### Método "unset"

Con el objetivo de tener una forma optimizada de eliminar un atributo según una ruta de atributos

> NOTA: este metodo modifica el objeto

```javascript
// object.unset(obj, path);

const o = {
    a: {b: 'c'},
    x: true,
};

object.unset(o, 'a.b');
object.unset(o, 'x');

// o => {a: {}}
```

**Argumentos**:

- obj \(*Object*\) **required**: objeto al cual se desea eliminar un atributo
- path \(*String*\) **required**: ruta de atributos al que se desea eliminar

**Retorna**:

- \(*undefined*\): no retorna un valor, ya que modifica el objeto

Al igual que **get** y **set**, este método de unset es muy similar a [unset][lodash-unset] de [lodash][lodash] y se logra mejorar cercano al 100% la cantidad de operaciones que se pueden realizar por segundos. ejecutar:

~~~bash
$ yarn benchmark benchmark/unsetProperty.js

utils.object.unset x 2,045,189 ops/sec ±9.03% (81 runs sampled)
_.unset x 1,374,280 ops/sec ±0.99% (87 runs sampled)
Fastest is utils.object.unset
~~~

### Método "isNil"

Con el objetivo de tener una forma optimizada de validar si un atributo según una ruta de atributos es **null** o **undefined**.

```javascript
// object.isNil(obj, path);

const o = {
        a: {b: 'c'},
        x: true,
    },
    ab = object.isNil(o, 'a.b'),
    xz = object.isNil(o, 'x.z');

// ab => false
// xz => true
```

**Argumentos**:

- obj \(*Object*\) **required**: objeto al cual se desea validar un atributo
- path \(*String*\) **required**: ruta de atributos al que se desea validar

**Retorna**:

- \(*Boolean*\): Retorna verdadero si es **null** o **undefined**

A diferencia de **get**, **set** y **unset**, este método de isNil es distinto a [isNil][lodash-isNil] de [lodash][lodash], pero es igual a la combinación de [isNil][lodash-isNil] sobre un [get][lodash-get] y al comparar también se logra mejorar cercano al 100% la cantidad de operaciones que se pueden realizar por segundos. ejecutar:

~~~bash
$ yarn benchmark benchmark/unsetProperty.js

utils.object.isNil x 1,175,701 ops/sec ±2.28% (86 runs sampled)
_.isNil(_.get()) x 691,738 ops/sec ±1.24% (88 runs sampled)
Fastest is utils.object.isNil
~~~

### Método **paths**

El objetivo es tener un arreglo con las rutas de los atributos que cumplan con las con ciertas características.

```javascript
// object.paths(obj, fn, parent, result);

const o = {
        a: {b: 'c'},
        j: {k: 'true'},
        x: 'true',
    },
    fn = (value, path, result) => value === 'true',
    paths = object.paths(o, fn);

// paths => ['j.k', 'x']
```

**Argumentos**:

- obj \(*Object*\) **required**: objeto del cual se desean obtener las rutas de atributos que cumplan con la función
- fn \(*Function*\) **required**: función que evaluá los valores, atributos y rutas
    - value \(*\**\): valor que se esta evaluando
    - path \(*String*\): ruta del atributo que se esta evaluando
    - result \(*Array[String]*\): resultado de rutas que se tiene hasta el momento
- parent \(*String*\): ruta de atributos hasta el momento de la evaluación de la función (uso interno para formar todas las rutas)
- result \(*Array[String]*\): rutas a los atributos que en los cuales al aplicar la función el resultado fue verdadero (uso interno de la función, ya que acumula el resultado a retornar)

**Retorna**:

- \(*Array[String]*\): Retorna un arreglo con todas las rutas a los atributos que en los cuales al aplicar la función el resultado fue verdadero

[lodash]: https://lodash.com/
[lodash-get]: https://lodash.com/docs/4.17.4#get
[lodash-set]: https://lodash.com/docs/4.17.4#set
[lodash-unset]: https://lodash.com/docs/4.17.4#unset
[lodash-isNil]: https://lodash.com/docs/4.17.4#isNil