# Introduccion a Javascript

En esta tarea aprenderás tres conceptos básicos en el lenguaje Javascript:

- Tipos primitivos
- Variables
- Funciones


## Tipos primitivos

En Javascript, existen 5 tipos primitivos, los cuales son:

1. Números:
  Son números expresados como enteros o decimales.
1. Cadenas de caracteres:
  Son secuencias de caracteres, pueden agruparse usando "" o ''.
1. Booleanos:
  Son valores que determinan el valor de verdad de una expresión.
1. Funciones:
  Son espacios de ejecución de sentencias, reciben parámetros y retornan valores.
1. Objetos:
  Son colecciones de parejas llave valor.


También existen tipos específicos para denotar variables indefinidas o vacías

- undefined
- null

## Variables

Una variable es un espacio de memoria reservado para almacenar valores específicos.

En Javascript las variables no tienen tipo, y se definen usualmente con la palabra reservada `var`:

```
  var a = 5;
```

> Recordemos que toda expresión en Javascript debe terminar con un ;

## Funciones

Como se mencionó anteriormente, una función es un espacio de ejecución de sentencias Javascript que puede recibir parámetros de entrada y retornar valores.

Las funciones se declara utilizando la palabra reservada `function` de la siguiente manera:

```
  function hola()
  {
    return "Hola mundo"
  }
```

Las funciones son invocadas llamandolas por su nombre

```
  hola();
```

> En Javascript las funciones son ciudadanos de primera clase, lo que quiere decir que pueden ser almacenados como variables y ser pasados a otras funciones, por ejemplo, el ejemplo anterior es equivalente al siguiente
  ```
    var hola = function()
    {
      return "Hola mundo"
    };
  ```

Ahora completa los ejercicios en ejercicios.js.

Puedes verificar que todo esté correcto visitando en tu navegador el archivo index.html
