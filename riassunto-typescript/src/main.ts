// BASIC TYPES
let id: number = 5;
let company: string = `Traversy Media`;
let isPublished: boolean = true;

//posso usare any per dare un tipo qualsiasi e successivamente posso anche 
//cambiare il tipo senza incappare in errori
let x: any = `Hello`;
x = true;

//posso inizializzare una variabile e dopo dargli un valore
let age: number;
age = 28;

//possiamo settare il tipo per i valori contenuti in un array
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello, I can contain anything"];



//TUPLE -> posso specificare l'esatto tipo dentro all'array
let person: [number, string, boolean] = [1, "hello", true];
// in questo caso l'array si aspetta i tipi in questo specifico ordine

//TUPLE ARRAY -> Ovvero Array di tuple

let employee: [number, string][];

employee = [
    [1, `Brad`],
    [2, `Giamp`],
    [3, `John`]
];



// UNION -> Se vogliamo che una particolare variabile "contenga" più di un tipo

let multiTypes: string | number = 22; // oppure `22`



// ENUM -> ci consentono di definire un set di costanti sia numeriche che stringhe
// enum mi genera una IIFE per creare uno scope
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
};
// Di default conterrà dei valori 0,1,2 ect
console.log(Direction1.Up);


enum Direction2 {
    Up = `Up`,
    Down = `Down`,
    Left = `Left`,
    Right = `Right`
};

console.log(Direction2.Left);




// OBJECTS

const user: {
    id: number;
    name: string;
} = {
    id: 1,
    name: `John`
};

// Questo modo però risulta troppo caotico quindi possiamo fare nel seguente modo:

type User = {
    id: number,
    name: string
};

const user2: User = {
    id: 1,
    name: `Josh`
};


// TYPE ASSERTION -> dice al compilatore di trattare un'entità come un tipo diverso

let cid: any = '1';
let customerId = <number>cid; // primo modo
customerId = 5;
let customerId2 = cid as string; // secondo modo

console.log(typeof customerId); //number   
console.log(typeof customerId2); //string





// FUNCTIONS

function addNum(x: number, y: number): number {  // il terzo "number" setta il tipo che deve ritornare la funzione
    return x + y;
}

console.log(`result of sum is: ${addNum(1, 2)}`);


//void
function log(message: string | number): void {
    console.log(message);

}
log("Hello");



// INTERFACES -> sono custom types o una specifica struttura per un object o funzione

interface UserInterface {
    id: number;
    name: string;
}

const user3: UserInterface = {
    id: 1,
    name: 'John'
}


// interfaces molto simile a type.
//differenze: 
//type può essere usato con primitives e con le unions
// es:
type Point = number | string;
const p1: Point = 1;
//non posso usare interface nello stesso modo!!!

//interfaces vengono usati molto negli objects

//con il punto interrogativo ? posso inserire una variabile che poi non so se utilizzerò
interface UserParameters {
    id: number,
    name: string,
    age?: number
}

const user4: UserParameters = {
    id: 1,
    name: `John`
}


// se voglio modificare un valore posso fare:

user4.id = 5;

//ma se setto l'id con "readonly" non posso più

interface UserReadOnlyId {
    readonly id: number,
    name: string,
    age?: number
}

const user5: UserReadOnlyId = {
    id: 1,
    name: `John`
}

// user5.id = 6;    ->  // mi da errore (scommenta per vedere)


// INTERFACES con le funzioni

interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;



// CLASSI

class Person {
    id: number;
    name: string;

    constructor(id: number, name: string) {
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
    private id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`;
    }
}

const dog = new Animal(1, `Bobby`);
console.log(dog.register());


// POSSO USARE INTERFACES CON LE CLASSI

interface PersonInterface {
    id: number;
    name: string;
    register(): string;
}

//per implementarlo uso la keyword "implements"

class PersonWithInterface implements PersonInterface {

    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`
    }
}


//Usando la keyword extends

// SUBCLASSE -> la classe estesa da un'altra classe
class Employee extends PersonWithInterface {
    position: string;

    constructor(id: number, name: string, position: string) {
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

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4,5]);
let strArray = getArray<string>([`giamp`,`bitti`,`sardinia`]);

// numArray.push(`hello`);  // in questo caso mi da errore. Perchè numArray lo abbiamo impostanto come array di soli numeri

//QUINDI invece di avere "any" che ci permette di fare qualcosa come questo -> numArray.push(`hello)
// possiamo usare il GENERIC <T> come un placeholder del tipo e dopo definiamo il tipo come in riga 293 con <number>

