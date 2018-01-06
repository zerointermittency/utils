# logger

Método para el registro y/o despliegue de información

```javascript
const Nunchee = require('njs'),
    logger = Nunchee.utils.logger({
        level, transports: [{type, options}]
    });

// or

const logger = require('njs/utils/logger')({
    level, transports: [{type, options}]
});
```

**Uso**

```javascript
//
// Any logger instance
//
logger.log('silly', "127.0.0.1 - there's no place like home");
logger.log('debug', "127.0.0.1 - there's no place like home");
logger.log('verbose', "127.0.0.1 - there's no place like home");
logger.log('info', "127.0.0.1 - there's no place like home");
logger.log('warn', "127.0.0.1 - there's no place like home");
logger.log('error', "127.0.0.1 - there's no place like home");
logger.info("127.0.0.1 - there's no place like home");
logger.warn("127.0.0.1 - there's no place like home");
logger.error("127.0.0.1 - there's no place like home");

//
// Default logger
//
winston.log('info', "127.0.0.1 - there's no place like home");
logger.info("127.0.0.1 - there's no place like home")
```

**Argumentos**:

- level \(*String*\): nivel de prioridad en el que se despliega la información, todos los disponibles [aquí][winston-levels]
- transports \(*Array[Object]*\):
    - type \(*String*\) **required**: determina que tipo de **[transport][winston-transport]** se va a utilizar en el logger (File, Console, etc)
    - options \(*Object*\): estas opciones son todas las que puede recibir el tipo de **[transport][winston-transport]** con el que se quiera trabajar, mas información [aquí][winston-transport]

**Retorna**:

- \(*Logger*\): Retorna un objeto logger que posee todas las funcionalidades según los argumentos entregados

Este método es un wrapper para [winston][winston], con el objetivo de tener las siguientes opciones por defecto:

- Console:
    - timestamp: función que agrega la fecha en el que realiza el registro de la información, por defecto [ISO 8601][isoDate] (YYYY-MM-DDTHH:mm:ssZ)
    - colorize: indica si el despliegue de la información en la consola tendrá colores, por defecto **true**

- File:
    - timestamp: función que agrega la fecha en el que realiza el registro de la información, por defecto [ISO 8601][isoDate] (YYYY-MM-DDTHH:mm:ssZ)
    - tailable: esto activa la rotación de archivos (debe estar configurado **maxFiles** y **maxsize**)
    - maxsize: tamaño máximo por archivo, por defecto **5Mb**
    - maxFiles: cantidad de archivos a mantener, por defecto **20**
    - zippedArchive: comprime todos los archivos excepto el actual, por defecto **true**


[winston]: https://www.npmjs.com/package/winston
[winston-levels]: https://www.npmjs.com/package/winston#logging-levels
[winston-transport]: https://github.com/winstonjs/winston/blob/master/docs/transports.md
[isoDate]: https://en.wikipedia.org/wiki/ISO_8601