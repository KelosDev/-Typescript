"use strict";
// BASIC TYPES
let id = 5;
let company = `Traversy Media`;
let isPublished = true;
//posso usare any per dare un tipo qualsiasi e successivamente posso anche 
//cambiare il tipo senza incappare in errori
let x = `Hello`;
x = true;
//posso inizializzare una variabile e dopo dargli un valore
let age;
age = 28;
//possiamo settare il tipo per i valori contenuti in un array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello, I can contain anything"];
//TUPLE -> posso specificare l'esatto tipo dentro all'array
let person = [1, "hello", true];
// in questo caso l'array si aspetta i tipi in questo specifico ordine
//TUPLE ARRAY -> Ovvero Array di tuple
let employee;
employee = [
    [1, `Brad`],
    [2, `Giamp`],
    [3, `John`]
];
// UNION -> Se vogliamo che una particolare variabile "contenga" più di un tipo
let multiTypes = 22; // oppure `22`
// ENUM -> ci consentono di definire un set di costanti sia numeriche che stringhe
// enum mi genera una IIFE per creare uno scope
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
;
// Di default conterrà dei valori 0,1,2 ect
console.log(Direction1.Up);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
;
console.log(Direction2.Left);
// OBJECTS
const user = {
    id: 1,
    name: `John`
};
const user2 = {
    id: 1,
    name: `Josh`
};
// TYPE ASSERTION -> dice al compilatore di trattare un'entità come un tipo diverso
let cid = '1';
let customerId = cid; // primo modo
customerId = 5;
let customerId2 = cid; // secondo modo
console.log(typeof customerId); //number   
console.log(typeof customerId2); //string
// FUNCTIONS
function addNum(x, y) {
    return x + y;
}
console.log(`result of sum is: ${addNum(1, 2)}`);
//void
function log(message) {
    console.log(message);
}
log("Hello");
const user3 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const user4 = {
    id: 1,
    name: `John`
};
// se voglio modificare un valore posso fare:
user4.id = 5;
const user5 = {
    id: 1,
    name: `John`
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// CLASSI
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const brad = new Person(1, 'Brad');
const giamp = new Person(2, 'Giamp');
console.log(brad, giamp);
// CLASSI con private, public e protected
// con private posso accedere alla proprietà solo all'interno della classe
// con protected posso accedere alla proprietà solo all'interno della classe o all'interno delle classi estese (extends)
// con public posso accedere alla proprietà da ovunque ed è come non mettere niente
class Animal {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const dog = new Animal(1, `Bobby`);
console.log(dog.register());
//per implementarlo uso la keyword "implements"
class PersonWithInterface {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
//Usando la keyword extends
// SUBCLASSE -> la classe estesa da un'altra classe
class Employee extends PersonWithInterface {
    constructor(id, name, position) {
        super(id, name); // è lo stesso di inizializzare -> this.id = id, this.name = name;
        this.position = position;
    }
}
const emp = new Employee(3, `Giampietro`, `Italy`);
console.log(`${emp.name} is located in ${emp.position}`);
console.log(emp.register());
// GENERICS -> sono utilizzati per creare componenti riutilizzabili -> vediamo un esempio per capire meglio
// function getArray(items: any[]): any[] {
//     return new Array().concat(items);
// }
// let numArray = getArray([1,2,3,4,5]);
// let strArray = getArray([`giamp`,`piras`,`sardinia`]);
//sono autorizzato a fare:
// numArray.push(`hello`); // non ho errori perche getArray prende un array di any types e ritorna un array di any types
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray([`giamp`, `bitti`, `sardinia`]);
// numArray.push(`hello`);  // in questo caso mi da errore. Perchè numArray lo abbiamo impostanto come array di soli numeri
//QUINDI invece di avere "any" che ci permette di fare qualcosa come questo -> numArray.push(`hello)
// possiamo usare il GENERIC <T> come un placeholder del tipo e dopo definiamo il tipo come in riga 293 con <number>
