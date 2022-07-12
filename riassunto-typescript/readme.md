# TypeScript

## Caratteristica principale
- Possiamo dichiarare i tipi delle variabili
- Intellisense ->tutti gli strumenti/funzionalità in più che aggiunge all'interno del text editor o dell'IDE

TypeScript is an open source language and is a superset of JS.
- Offers additional features to JS including static types
- Using types is completely **optional**
- Compiles down to regular js
- Can be used for front-end JS as well as backend with Node.js
- Includes most feature from ES6, ES7 (classes, arrow functions, etc)
- Types from 3rd party libraries can be addes with **type definitions**
  


***PRO E CONTRO***

PRO:
- More Robust
- Easily Spot Bugs
- Predictability
- Readability
- Popular

CONTRO:
- More code to write
- More to learn
- Required Compilation
- Not true static typing

#

```
1) creare una cartella dove si vuole lavorare. Es: typescript
2) dentro la cartella typescript creare 2 cartelle: 
    a) dist
    b) src
```

Da linea di comando:

```
1) npm i -g typescript  //per installare il compilatore di typescript
2) tsc -v       //per controllare la versione installata
3) tsc --init     //crea il file di configurazione "tsconfig.json"
```

Dentro al file "tsconfig.json" impostare:
```
"target": "es6",
"rootDir": "./src",   //da scommentare
"outDir": "./dist"    //da scommentare
```
Dentro la cartella "src" creare il file "main.ts".

Scrivi qualcosa e poi compila nel seguente modo:

Da linea di comando:
```
tsc main.ts     // produrrà un file main.js dentro la cartella "dist"
```
Se si vogliono compilare tutti i file .ts contemporaneamente, da linea di comando, scrivere semplicemente:
```
tsc
```
Nella eventuale creazione di file .html usare come script i file .js contenuti nella cartella dist in quanto i browser non leggo il .ts

Usare il comando:
```
tsc --watch nomefile
```
per vedere in diretta gli errori
