# Validador de CPF v.1.0.3

**Esta biblioteca se destina à classificação de strings como CPFs válidos ou inválidos.**
Na versão atual é capaz validar strings retornando `true` para CPF válido e `false` para CPF inválido.

## Como instalar:

```shell

$  npm install cpfvalidatorjanarf

```

## Como utilizar:

```node

> const cpfValidator = require("cpfvalidatorjanarf");
> console.log(cpfValidator('22993865056'))
> // returns true

```

```node

> const cpfValidator = require("cpfvalidatorjanarf");
> console.log(cpfValidator('22993865059'))
> // returns false

```

```node

> const cpfValidator = require("cpfvalidatorjanarf");
> console.log(cpfValidator('11111111111'))
> // returns false

```

## roadmap oficial do projeto

#### versão 1.0.3 (released)
- funcionalidades: valida strings para CPF válido ou inválido.
