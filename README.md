## Información

##### Crear proyecto
`nest new myfirstapp`

##### Ejecutar proyecto
dev: `npm run start`

dev-watch: `npm run start:dev`

prod: `npm run start:prod`

comprobar lint: `npm run lint`

##### Regla dentro de eslint.config.mjs para desarrollar en windows

Después de `rules` añadir: 
"prettier/prettier": [
    "error",
    {
        "endOfLine": "auto"
    }
]

##### Generar carpetas, archivos, modulos, etc

Utilizamos el comando `nest generate`. Si queremos ver las distintas opciones para crear usaremos `nest generate --help`:

Generar módulo: `nest g mo <name>`

Generar controlador: `nest g co <name>` para no crear el archivo de testing añadir la bandera `--no-spec`

Generar servicio: `nest g s <name>` para no crear el archivo de testing añadir la bandera `--no-spec`

Generar pipe: `nest g pipe <nameOfModule/pipes/name>` para no crear el archivo de testing añadir la bandera `--no-spec`

Generar guards: `nest g guards <nameOfModule/guards/name>` para no crear el archivo de testing añadir la bandera `--no-spec`

##### Para manejar las validaciones

Crearemos los archivos .dto para manejar las validaciones de los datos. Para ello se instalarán las siguientes librerías `npm i --save class-validator class-transformer`

Para manejar las validaciones globalmente sin tener que añadir el decorador UsePipe() en cada controlador, se añadirá en el archivo `main.ts` la siguiente línea `app.useGlobalPipes(new ValidationPipe());`.

Si queremos validar que no se traten los campos que no están en el dto, lo haríamos de la siguiente forma `app.useGlobalPipes(new ValidationPipe({whitelist: true}));`.

##### Http code status

Podemos modificar el código de estado con el decorador `@HttpCode(<número>)`

##### Pipes

Si queremos obter un parámetro, por ejemplo, de tipo numérico sin tener que parsearlo manualmente, podrías completar el decorador @Param() de la siguiente forma `getNumber(@Param('num', ParseIntPipe) num: number)`, asó el parámetro "num" será un valor numérico.

Si creamos un pipe personalizado y queremos añadirlo a un decorador @Query() lo haremos de la siguiuente forma `greet(@Query(ValidateUserPipe) query: {name: string, age: number})`.
